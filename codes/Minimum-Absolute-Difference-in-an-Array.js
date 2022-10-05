//Given an array of distinct integers, determine the minimum absolute difference between any two elements. Return all element pairs with that minimal absolute difference in ascending order. 
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
   //Sort the array first in ascending order
    let tmp = arr.sort((a,b)=>a-b) 
   //Assume the min absolute value is the diff between the first pair
    let min = Math.abs(tmp[0] - tmp[1])

    //Compare with the next 'pair difference' to find the min'
    for (let i = 1; i < tmp.length -1; i++) {
        if(Math.abs(tmp[i] - tmp[i+1]) < min) {
            min =  Math.abs(tmp[i] - tmp[i+1])
        }
    }
 return min 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = minimumAbsoluteDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
