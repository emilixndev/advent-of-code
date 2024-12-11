const fs = require('fs');

const data = fs.readFileSync('day3-input.txt', 'utf-8');

mulData = data.match(/mul\(\d+,\d+\)/g)

let result = 0

for (let i = 0; i < mulData.length; i++) {
    let numbers = mulData[i].match(/\d+/g)
    result = result + (numbers[0] * numbers[1])
}
console.log('The result is : ' + result);