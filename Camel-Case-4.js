// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

//     Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
//     The operation will either be S (split) or C (combine)
//     M indicates method, C indicates class, and V indicates variable
//     In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
//     In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
 
function processData(input) {
  let arr = input.split("\r\n")

  arr.forEach((el) => {
    let splitted = el.split(";")
    if (splitted[0] === "S") {
      //Case S
      console.log(
        splitted[2]
          .replace(/\(|\)/g, "")
          .split(/(?=[A-Z])/)
          .map((i) => i.toLowerCase())
          .join(" ")
      ) //deletes (), split on uppercase, set all to lowercase and join items with an space between
    } else {
      //Case C
      console.log(processC(splitted[1], splitted[2])) // in case C enter the function
    }
  })
}

function processC(method, text) {
  let result
  switch (method) {
    case "C":                                                 //CASE C: separate on spaces, set first letter to uppercase in each item if the array and deletes the "C"
      result = text
        .split(" ")
        .map((i) => i.charAt(0).toUpperCase() + i.slice(1))
        .join("")                                               
      break

    case "M":                                                                   // CASE M: separates on spaces set first letter to uppercase in each item if the array, deletes the "M", join without spaces and add ()
      result =
        text
          .split(" ")
          .map((item, index) =>
            index !== 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
          )
          .join("") + "()" 
      break

    case "V":                                                                   //CASE V: separates on spaces set first letter to uppercase in each item if the array, deletes the "V" and join without spaces
      result = text
        .split(" ")
        .map((item, index) =>
          index !== 0 ? item.charAt(0).toUpperCase() + item.slice(1) : item
        )
        .join("")
      break
  }
  return result
}

process.stdin.resume()
process.stdin.setEncoding("ascii")
_input = ""
process.stdin.on("data", function (input) {
  _input += input
})

process.stdin.on("end", function () {
  processData(_input)
})
