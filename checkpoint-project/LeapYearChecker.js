let initialYear = 2000

while (initialYear <= 3000) {
    if (
        (initialYear % 4 === 0 && initialYear % 100 !== 0) ||
        (initialYear % 400 == 0)
    ) {
        console.log("Leap year " + initialYear)
    }
    initialYear ++
}