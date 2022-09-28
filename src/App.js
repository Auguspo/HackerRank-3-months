
// var fs = require('fs');
// let files = fs.readdirSync('./codes/');
let arr = ['Breaking-the-Records.js', 'Camel-Case-4.js', 'Counting-sort-1.js', 'Counting-Valleys.js', 'Diagonal-Difference.js', 'Divisible Sum Pairs.js', 'Find-the-Median.js', 'FizzBuzz.js', 'Flipping-bits.js', 'FlippingMatrix.js', 'Grading-students.js', 'Lonely-Integer.js', 'Mars-Exploration.js', 'Maximun-Perimetrer-Triangle.js', 'Migratory Birds.js', 'Mini-Max-Sum.js', 'Pangrams.js', 'Permuting-Two-Arrays.js', 'Plus-Minus.js', 'Sales-by-match.js', 'Sparse-Arrays.js', 'Subarray-Division-2.js', 'Time-Conversion.js', 'XOR-Strings-3.js', 'Zig-Zag-Sequence.js']


function examples(files){

    let body=``;
    files.forEach(el => {
    body+=`
    <div class="card m-3">
    <object  data="./codes/${el}">    
    Not supported
    </object> 
    <div class="card-body">
    <h5 class="text-center">${el.replaceAll('-', ' ').slice(0, -3)}</h5>
    </div>
    </div>      
    `});

   

    document.getElementById('boxes').innerHTML = body;
   
}
examples(arr)

 


