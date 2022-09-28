//In this challenge, the task is to debug the existing code to successfully execute all provided test files.

Given two strings consisting of digits 0 and 1 only, find the XOR of the two strings.
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
    input += chunk;
    
});

process.stdin.on("end", function () {
  
   console.log(input.split(/\r?\n/).reduce((a,b)=> a^b))
});
