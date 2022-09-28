// import { Dropdown } from 'mdb-ui-kit';

// $(document).ready(function() {
//     $(".dropdown-toggle").dropdown();
// });


const box = document.getElementById('box')

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {

  
    if (box.style.display === 'none') {
    box.style.display = 'block';
    box2.style.display = 'none';


  } else {
    box.style.display = 'none';

 
  }
});

const box2 = document.getElementById('box2');

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function handleClick() {

  
    if (box2.style.display === 'none') {
    box.style.display = 'none';

    box2.style.display = 'block';


  } else {
    box2.style.display = 'none';

 
  }
});
