// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    // Write your code here
    let sorted = a.sort((a,b)=> a-b);
    
    let cur = [];
    let long=0;
    let initial=0;
    
        for(let i =0; i<sorted.length; i++){
             let result = Math.abs(sorted[initial] - sorted[i]);
    if (result <= 1){
        cur.push(sorted[i]);
        if(cur.length > long){
                long = cur.length
            };
    }else {

        initial = i;
        if(cur.length > long){
            long = cur.length
        }
        cur = [];
        cur.push(sorted[i]);
    }

}
return long;
}
    



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
