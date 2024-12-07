const fs = require('fs');

const data = fs.readFileSync('day1-input.txt', 'utf-8');

const lines= data.split('\n');

const leftColumn= [];
const rightColumn = [];


for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim().split(/\s+/)
    leftColumn.push(parseFloat(line[0]));
    rightColumn.push(parseFloat(line[1]));
}

leftColumn.sort()
rightColumn.sort()

let total= 0
for (let i = 0; i < leftColumn.length; i++) {
    total += Math.abs(leftColumn[i] - rightColumn[i])
}

console.log('Total result : ' + total)
