let hour = Math.floor((Math.random() * 24));
console.log(hour); // Very important the condition between ()
if (hour < 12) {
    console.log("Hour: " + hour);
    console.log("Good morning 🌞")
} else {
    console.log("Hour: " + hour);
    console.log("Good afternoon ☁️")
}