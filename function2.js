

const myButton = document.getElementById('bt');
const myDiv    = document.getElementById('myDiv');


myButton.addEventListener('click', function() {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'none';
  }
});


