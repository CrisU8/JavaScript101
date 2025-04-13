let myNumber = 20
let binary = ""
console.log("My Number: ", myNumber)

while (myNumber!=0){
    if (myNumber%2==0){
        binary = "0" + binary
    }else{
        binary = "1" + binary
    }
    myNumber = Math.floor(myNumber/2)
    console.log(myNumber)
}

console.log("My number in binary: " + binary)