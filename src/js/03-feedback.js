import LodashThrottle from 'lodash.throttle';
import { save, load } from './storage';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const objData = {};

updateForm();
form.addEventListener("input", LodashThrottle(handleInput, 500));
form.addEventListener("submit", handleSaveData);
function handleInput({ target }) {
    objData[target.name] = target.value;
    save(STORAGE_KEY, objData);
    console.log(objData);
};

function handleSaveData(event) {
    event.preventDefault();

};

function updateForm() {
    load(STORAGE_KEY);
}


// function createTaskObject(email, message) {
//   return {
//     email,
//     message,
//   };
// };

// function addTaskToStorage(email, message) {
//   const currentState = load(STORAGE_KEY);
//   if (currentState === undefined) {
//     save(STORAGE_KEY, createTaskObject(email, message));
//   } else {
//     save(STORAGE_KEY, currentState);
//   }
// };