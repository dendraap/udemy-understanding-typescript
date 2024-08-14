const btn1 = document.querySelector('button')!

const clicked = (message: string) => {
    console.log(message)
}

const button = (message: string): string => {
    console.log(message)
    return message
}
// do something when clicked
if (btn1) {
    btn1.addEventListener('click', () => clicked("Clicked"))
}
