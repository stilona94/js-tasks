let firstValue, secondValue; 

function sum() {
  firstValue = document.getElementById('first-value').value;
  secondValue = document.getElementById('second-value').value;

  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);

  const result = firstValue + secondValue;

  if (result > 10 && result < 30) {
    document.body.style.backgroundColor = 'orange';
    console.log('Result is more than 10 and less then 30');
  } else  if(result > 30) {
    document.body.style.backgroundColor = 'cyan';
    console.log('Result is more then 30!')
  } else {
    document.body.style.backgroundColor = 'blue';
    console.log('Something else');
  }

}
console.log(fistValue)