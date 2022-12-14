// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//  Then print the respective minimum and maximum values as a single line of two space-separated long integers.

"use strict"

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  var min = 0,
    max = 0,
    aux = 0

  arr.map((item) => (aux += item))
  max = aux - Math.min(...arr)
  min = aux - Math.max(...arr)

  return console.log(min, max)
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10))

  miniMaxSum(arr)
}
