const btn1 = document.querySelector('button')!

// function click handler
const clicked = (message: string) => {
    let n1 = 0
    n1 = 2
    console.log(n1)
    console.log("Clicked!",message)
}
// do something when clicked
if (btn1) {
    btn1.addEventListener('click', () => clicked("Clicked"))
}
