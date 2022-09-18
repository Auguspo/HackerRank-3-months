//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */


function diagonalDifference(arr) {

 // Usamos reduce, sumamos y restamos en el acumulador, ya q es una matriz el elemento actual es una rray por lo q al anexarle el index recorre diaginalmente, no olvidarse del ",0" ya que sino arrancara desde el primera elemento y no desde 0
  return Math.abs(arr.reduce((acc,el,i)=>acc+el[i]-el[el.length-1-i],0));

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
