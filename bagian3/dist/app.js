"use strict";
const btn1 = document.querySelector('button');
const clicked = (message) => {
    console.log(message);
};
const button = (message) => {
    console.log(message);
    return message;
};
if (btn1) {
    btn1.addEventListener('click', () => clicked("Clicked"));
}
