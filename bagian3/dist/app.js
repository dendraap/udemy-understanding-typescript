"use strict";
const btn1 = document.querySelector('button');
const clicked = (message) => {
    let n1 = 0;
    n1 = 2;
    console.log(n1);
    console.log("Clicked!", message);
};
if (btn1) {
    btn1.addEventListener('click', () => clicked("Clicked"));
}
//# sourceMappingURL=app.js.map