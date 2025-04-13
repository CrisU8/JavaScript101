let ph = Math.floor(Math.random() * 14);
console.log(ph);
if (ph > 7) {
    console.log("Ph level: BASIC");
} else if (ph < 7) {
    console.log("Ph level: ACIDIC");
} else {
    console.log("Ph level: NEUTRAL");
}