const fs = require('fs');

const data = fs.readFileSync('day2-input.txt', 'utf-8');
const lines = data.split('\n');

// TODO This part is not working, I need to comeback to it

let numberOfSafeReports = 0
for (let i = 0; i < lines.length; i++) {


    let numbers = lines[i].trim().split(/\s+/)
    if (isSafeReports(numbers)) {
        numberOfSafeReports++
    }else {

        let linesss = lines[i].trim().split(/\s+/)
        for (let i = 0; i < linesss.length; i++) {
            const newLine = [...linesss.slice(0, i), ...linesss.slice(i + 1)];
            if (isSafeReports(newLine)) {
                numberOfSafeReports++
                break;
            }
        }

    }
}

console.log(numberOfSafeReports)


function isSafeReports(line) {
    numbers = line

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

