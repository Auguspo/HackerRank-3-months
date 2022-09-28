//Given a number n, for each integer i in the range from 1 to n inclusive, print one value per line as follows: If i is a multiple of both 3 and 5, print the value of i

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
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  let arr = Array(n)
    .fill()
    .map((_, i) => i + 1)
  return arr.map((el) =>
    el % 3 == 0
      ? el % 5 == 0
        ? console.log("FizzBuzz")
        : console.log("Fizz")
      : el % 5 == 0
      ? console.log("Buzz")
      : console.log(el)
  )
}
function main() {
  const n = parseInt(readLine().trim(), 10)

  fizzBuzz(n)
}
