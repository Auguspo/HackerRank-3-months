//Given an array of stick lengths, use  of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as  integers in non-decreasing order.

//If there are several valid triangles having the maximum perimeter:

//Choose the one with the longest maximum side.
//If more than one has that maximum, choose from them the one with the longest minimum side.
//If more than one has that maximum as well, print any one them.
//If no non-degenerate triangle exists, return .

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
 * Complete the 'maximumPerimeterTriangle' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY sticks as parameter.
 */

        
function maximumPerimeterTriangle(a) {
  a.sort((a1, b1) => b1 - a1); 
  let sum = 0, elements = [];
  for(let i = 2; i < a.length; i++) {
      if(a[i - 2] < (a[i - 1] + a[i])) {
          let tempSum = a[i] + a[i - 1] + a[i - 2];
          if(tempSum > sum) {
              sum = tempSum;
              elements = [a[i], a[i - 1], a[i - 2]];
          }
      } 
  }
  return elements.length ? elements : [-1];
}
 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const sticks = readLine().replace(/\s+$/g, '').split(' ').map(sticksTemp => parseInt(sticksTemp, 10));

    const result = maximumPerimeterTriangle(sticks);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
