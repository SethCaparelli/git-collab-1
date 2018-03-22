const peeps = [
    {
        name: "Seth",
        age: 29
    },
    {
        name: "Greg",
        age: 78
    }
]

const numbers = [1, 23, 43, 345, 34, 32, 987]

function returnEvenNumbers(numbers) {
    const evenNumbs = []
    for(let i = 0; i >= numbers.length; i++) {
        if((numbers[i] % 2) === 0) {
            evenNumbs.push(numbers[i])
        }
    }
    return evenNumbs
}