const fs = require('fs');

const data = fs.readFileSync('day2-input.txt', 'utf-8');
const lines = data.split('\n');


let numberOfSafeReports = 0
for (let i = 0; i < lines.length; i++) {


    if (isSafeReports(lines[i])) {
        numberOfSafeReports++
    }
}

console.log(numberOfSafeReports)


function isSafeReports(line) {
    let numbers = line.trim().split(/\s+/)

    if (numbers.length === 1) {
        return false;
    }

    let isIncreasing = parseFloat(numbers[0]) > parseFloat(numbers[1])
    let isDecreasing = parseFloat(numbers[0]) < parseFloat(numbers[1])

    for (let i = 0; i < numbers.length-1; i++) {

        let currentNumber = parseFloat(numbers[i ])
        let nextNumber = parseFloat(numbers[i+1])
        if (currentNumber === nextNumber) {
            return false;
        }
        if (Math.abs(currentNumber - nextNumber) > 3) {
            return false
        }

        if(isIncreasing &&!(currentNumber>nextNumber)){
            return false
        }

        if(isDecreasing &&!(currentNumber<nextNumber)){
            return false
        }

    }

    return true;
}

