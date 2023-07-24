import LodashThrottle from 'lodash.throttle';
import { save, load } from './storage';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const objData = {};

updateForm();

form.addEventListener("input", LodashThrottle(handleInput, 500));
form.addEventListener("submit", handleSubmit);

function handleInput({ target }) {
    objData[target.name] = target.value;
    save(STORAGE_KEY, objData);
    
};

function handleSubmit(event) {
    event.preventDefault();
    console.log(objData);
    const {
        elements: { email, message }
    } = event.target;
    if (email.value === '' || message.value === '') {
      alert('Please fill in all the fields!');
    }
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function updateForm() {
    const currentState = load(STORAGE_KEY);
    if (currentState) {
        Object.entries(currentState).forEach(([name, value]) => {
          objData[name] = value;
          form.elements[name].value = value;
        });
        
    };
}
