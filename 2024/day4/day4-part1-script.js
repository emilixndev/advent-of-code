const fs = require('fs');

const input = fs.readFileSync('day4-input.txt', 'utf-8');

let data = input.split('\n')
let count = 0
for (let vertical = 0; vertical < data.length; vertical++) {
    for (let horizontal = 0; horizontal < data[vertical].length; horizontal++) {
        if (vertical <= data[vertical].length - 4) {
            if (data[vertical][horizontal] +
                data[vertical + 1][horizontal] +
                data[vertical + 2][horizontal] +
                data[vertical + 3][horizontal] === 'XMAS') {
                count++
            }
        }
        if (vertical >= 3) {
            if (data[vertical][horizontal] +
                data[vertical - 1][horizontal] +
                data[vertical - 2][horizontal] +
                data[vertical - 3][horizontal] === 'XMAS') {
                count++
            }
        }
        if (horizontal <= data[horizontal].length - 4) {
            if (data[vertical][horizontal] +
                data[vertical][horizontal + 1] +
                data[vertical][horizontal + 2] +
                data[vertical][horizontal + 3] === 'XMAS') {
                count++
            }
        }
        if (horizontal >= 3) {
            if (data[vertical][horizontal] +
                data[vertical][horizontal - 1] +
                data[vertical][horizontal - 2] +
                data[vertical][horizontal - 3] === 'XMAS') {
                count++
            }
        }
        if (vertical >= 3 && horizontal <= data[horizontal].length - 4) {
            if (data[vertical][horizontal] +
                data[vertical - 1][horizontal + 1] +
                data[vertical - 2][horizontal + 2] +
                data[vertical - 3][horizontal + 3] === 'XMAS') {
                count++
            }
        }
        if (vertical >= 3 && horizontal >= 3) {
            if (data[vertical][horizontal] +
                data[vertical - 1][horizontal - 1] +
                data[vertical - 2][horizontal - 2] +
                data[vertical - 3][horizontal - 3] === 'XMAS') {
                count++
            }
        }
        if (vertical <= data[vertical].length - 4 && horizontal >= 3) {
            if (data[vertical][horizontal] +
                data[vertical + 1][horizontal - 1] +
                data[vertical + 2][horizontal - 2] +
                data[vertical + 3][horizontal - 3] === 'XMAS') {
                count++
            }
        }
        if (vertical <= data[vertical].length - 4 && horizontal <= data[horizontal].length - 4) {
            if (data[vertical][horizontal] +
                data[vertical + 1][horizontal + 1] +
                data[vertical + 2][horizontal + 2] +
                data[vertical + 3][horizontal + 3] === 'XMAS') {
                count++
            }
        }
    }
}

console.log(count)

