let myNumber = 30
console.log("My Number: ", myNumber)

let iterator = 1
while (iterator <= myNumber) {
    let nextNumber = iterator
    if (
        (nextNumber % 3 === 0) &&
        (nextNumber % 5 === 0)
    ) {
        console.log("FizzBuzz")
    }else if (nextNumber % 3 === 0) {
        console.log("Fizz")
    }else if (nextNumber % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(nextNumber)
    }
    iterator ++
}