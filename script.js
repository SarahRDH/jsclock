const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document. querySelector(".hour-hand");

function setDate() {
    const now = new Date(); //new creates a blank JS object you can fill with stuff
    const seconds = now.getSeconds(); //now is the object we filled with UTC seconds
    const secondsDegrees = ((seconds / 60) * 360); 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360);
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    // const hours = now.getHours();
    // const hoursDegrees = ((hours / 60) * 360);
    // hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000); //will run setDate every 1000ms

