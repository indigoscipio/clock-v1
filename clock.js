let secondPointer = document.querySelector(".second-pointer");
let minutePointer = document.querySelector(".minute-pointer");
let hourPointer = document.querySelector(".hour-pointer");

setInterval(setDate, 1000);

function setDate(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondsDegrees = ((seconds/60) * 360) + 90;
    const minutesDegrees = ((minutes/60) * 360) + 90;
    const hoursDegrees = ((hours/12) * 360) + 90;
    
    secondPointer.style.transform = `rotate(${secondsDegrees}deg)`
    minutePointer.style.transform = `rotate(${minutesDegrees}deg)`
    hourPointer.style.transform = `rotate(${hoursDegrees}deg)`
    
    
}

// function helloWorld(){
//     console.log("Hello");
// }
