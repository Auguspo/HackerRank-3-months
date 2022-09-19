//A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  let string = s.toLowerCase()
  var regex = /([a-z])(?!.*\1)/g

  return string.match(regex).length === 26 ? "pangram" : "not pangram"  //Devuelve una cadena con todas las ocurrencias, en el caso de q se encuentre todo el abcedario devolvera una array de largo =26 en el caso de q falte alguna letra devolvera un array de menos item
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const s = readLine()

  const result = pangrams(s)

  ws.write(result + "\n")

  ws.end()
}
