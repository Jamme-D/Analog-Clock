// Creates variables to move clock hands
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Gets the date and time
var date = new Date();
console.log(date);

// Gets each unit of time
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Seconds: " + sec);

// Sets the degree based on time
let secPosition = sec * (360/60);
let minPosition = (min * 360/60) + ((secPosition/60));
let hrPosition = (hr * 360/12) + ((minPosition/12));

// Moves the clockhands
function updateClock () {
    // Adds necessary degree so that the program fixes the return to zero problem, and the clock isn't behind
    secPosition = secPosition + (360/60);
    minPosition = minPosition + (6/60);
    hrPosition = hrPosition + (3/360);

    // Moves hands
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// Sets interval method
var interval = setInterval(updateClock, 1000);

