
// var fs = require('fs');
// let files = fs.readdirSync('./codes/');
let arr = ['Breaking-the-Records.js', 'Camel-Case-4.js', 'Counting-sort-1.js', 'Counting-Valleys.js', 'Diagonal-Difference.js', 'Divisible Sum Pairs.js', 'Find-the-Median.js', 'FizzBuzz.js', 'Flipping-bits.js', 'FlippingMatrix.js', 'Grading-students.js', 'Lonely-Integer.js', 'Mars-Exploration.js', 'Maximun-Perimetrer-Triangle.js', 'Migratory Birds.js', 'Mini-Max-Sum.js', 'Pangrams.js', 'Permuting-Two-Arrays.js', 'Plus-Minus.js', 'Sales-by-match.js', 'Sparse-Arrays.js', 'Subarray-Division-2.js', 'Time-Conversion.js', 'XOR-Strings-3.js', 'Zig-Zag-Sequence.js']


function examples(files){

    let body=``;
    files.forEach(el => {
    body+=`
    <div class="card m-3">
    <object data="./codes/${el}">    
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

 
const box = document.getElementById('box');

const btn = document.getElementById('btn');

const box1 = document.getElementById('box1');

const btn1 = document.getElementById('btn1');

btn.addEventListener('click', function handleClick() {
  if (box.style.display === 'none') {
    box.style.display = 'block'
    box1.style.display = 'none';

    
  } else {
    box.style.display = 'none';
    box1.style.display = 'block';
    
  }
});

btn1.addEventListener('click', function handleClick() {
    if (box1.style.display === 'none') {
        box.style.display = 'none';
        box1.style.display = 'block';
  
      
    } else {
        box.style.display = 'block'
        box1.style.display = 'none';
      
    }
  });




