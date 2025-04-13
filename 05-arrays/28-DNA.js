// DNA sequence 🧬
const dnaPieces = ["A", "C", "G", "T"];
let myDNA = [];

while (myDNA.length < 24) {
    let seq = ""
    for (let i = 1; i <= 3; i++) {
        let randomIndex = Math.floor(Math.random() * dnaPieces.length);
        seq += dnaPieces[randomIndex];
    }
    myDNA.push(seq);
}

console.log("El largo de la secuencia es: " + myDNA.length);
console.log(myDNA);
