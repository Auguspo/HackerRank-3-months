//The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of elements, find the median

"use strict"

const fs = require("fs")

process.stdin.resume()
process.stdin.setEncoding("utf-8")

let inputString = ""
let currentLine = 0

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on("end", function () {
  inputString = inputString.split("\n")

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  arr.sort((a, b) => a - b)
  const n = arr.length
  return n % 2 == 0
    ? arr.slice(n / 2 - 1, 1 / 2 + 1).reduce((a, b) => a + b) / 2
    : arr.slice(n / 2, n / 2 + 1)[0]
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const n = parseInt(readLine().trim(), 10)

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10))

  const result = findMedian(arr)

  ws.write(result + "\n")

  ws.end()
}
