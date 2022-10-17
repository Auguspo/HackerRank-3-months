//For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of x, choose the smallest. Otherwise, print NO.

'use strict';

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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
var beautiful = true;
for (let len = 1; len < s.length; len++) { 
    var first = BigInt(s.substr(0, len));
    var num = BigInt(s.substr(0, len));
    if (s.length <= len) {
        continue;
    }
    var sNew = ''.concat(first.toString());
    while (sNew.length < s.length) {
        num++;
        sNew = sNew.concat(num.toString());
    }
    if (sNew === s) {
        console.log('YES ' + first);
        beautiful = false;
        continue;
    }
}
if (beautiful) {
    console.log('NO')
}
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
