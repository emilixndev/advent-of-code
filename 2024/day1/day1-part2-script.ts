const fs = require('fs');

const data = fs.readFileSync('day1-input.txt', 'utf-8');

const lines = data.split('\n');

const leftColumn = [];
const rightColumn = [];


for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim().split(/\s+/)
    leftColumn.push(line[0]);
    rightColumn.push(line[1]);
}

leftColumn.sort()
rightColumn.sort()

let similarityArray = {}
for (let i = 0; i < rightColumn.length; i++) {
    if (similarityArray[rightColumn[i]]) {
        similarityArray[rightColumn[i]].number++
        continue;
    }
    similarityArray[rightColumn[i]] = {number: 1}

}

let total = 0
for (let i = 0; i < leftColumn.length; i++) {
    if (similarityArray[leftColumn[i]]) {
        total += leftColumn[i] * similarityArray[leftColumn[i]].number
    }
}

console.log('Total result : ' + total)
