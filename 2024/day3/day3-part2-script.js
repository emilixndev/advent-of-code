const fs = require('fs');

const data = fs.readFileSync('day3-input.txt', 'utf-8');

const MUL_TYPE = 'mul'
const DO_TYPE = 'do'
const DONT_TYPE = 'dont'

const doRegex = RegExp(/do\(\)/g);
const dontRegex = RegExp(/don\'t\(\)/g);
const mulRegex = RegExp(/mul\(\d+,\d+\)/g);

let mulData = []

while ((matches = doRegex.exec(data)) !== null) {
    mulData = mulData.concat({index: matches.index, type: DO_TYPE})
}
while ((matches = dontRegex.exec(data)) !== null) {
    mulData = mulData.concat({index: matches.index, type: DONT_TYPE})
}
while ((matches = mulRegex.exec(data)) !== null) {
    mulData = mulData.concat({index: matches.index, type: MUL_TYPE, value: matches[0]})
}

mulData.sort((a, b) => a.index - b.index);

let canCalculate = true
let result = 0
for (let i = 0; i < mulData.length; i++) {
    if (mulData[i].type === DO_TYPE) {
        canCalculate = true
    }
    if (mulData[i].type === DONT_TYPE) {
        canCalculate = false
    }
    if (mulData[i].type === MUL_TYPE && canCalculate) {
        let numbers = mulData[i].value.match(/\d+/g)
        result = result + (numbers[0] * numbers[1])
    }
}

console.log('The result is : ' + result);
