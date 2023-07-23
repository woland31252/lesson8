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
    const {
        elements: { email, message }
    } = event.target;
    if (email.value === "" || message.value === "") {
        return window.alert("Please fill in the form")
    } 
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function updateForm() {
    const currentState = load(STORAGE_KEY);
    //    const onObject = Object.entries(currentState[searilizedState]);
    //     onObject.forEach(([name, value]) => {
    //         objData[name] = value;
    //         form.elements[name].value = value;
    //     });
    currentState.forEach(({target}) => {
        objData[target.name] = value;
        form.elements[target.name].value = value;
    });
}


// function createTaskObject(email, message) {
//   return {
//     email,
//     message,
//   };
// };

// function addTaskToStorage() {
//   const currentState = load(STORAGE_KEY);
//   if (currentState === undefined) {
//     save(STORAGE_KEY, objData);
//   } else {
//     save(STORAGE_KEY, currentState);
//   }
// };