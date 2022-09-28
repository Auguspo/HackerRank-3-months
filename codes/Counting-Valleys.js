//Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography.
//During his last hike he took exactly steps. For every step he took, he noted if it was an uphill, , or a downhill, step.
//Gary's hikes start and end at sea level and each step up or down represents a unit change in altitude.
//We define the following terms: A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
//Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.
//For example, if Gary's path is , he first enters a valley units deep. Then he climbs out an up onto a mountain units high. Finally, he returns to sea level and ends his hike.

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

function countingValleys(steps, path) {
  let count = 0
  let val = 0

  const arr = path
    .split("")
    .map((el) =>
      el === "U" ? count++ && (count === 0 ? val++ : val) : count--
    )

  return val
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const steps = parseInt(readLine().trim(), 10)

  const path = readLine()

  const result = countingValleys(steps, path)

  ws.write(result + "\n")

  ws.end()
}
