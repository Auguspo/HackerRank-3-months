
var fs = require('fs');
var files = fs.readdirSync('./codes/');

function examples(box){

    let body=``;

    box.forEach(el => {
    body+=`
    <div>
    <object  data="./codes/${el}" width="800" height="800">
    Not supported
    </object> 
    </div>      
    `;});
console.log(body)

    document.getElementById('boxes').innerHTML = body;
}


 


