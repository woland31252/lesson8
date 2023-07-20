import LodashThrottle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const arrStorage = {
    email: "email",
    message: "message",
};

form.addEventListener("click", handleForm);
function handleForm(event) {
    console.log("target:", event.target);
    console.log("currentTarget:", event.currentTarget);
}