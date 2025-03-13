//поиск элементов из html
const userButtonNumber = document.getElementById('userButtonNumber');
const numberParity = document.getElementById('numberParity');
const buttonArray = document.getElementById('buttonArray');
const outArray = document.getElementById('outArray');
const reverseArray = document.getElementById('reverseArray');
const deleteArray = document.getElementById('deleteArray');

// чётность числа
userButtonNumber.addEventListener('click', function(){
  let userNumber = document.getElementById('userNumber').value
  if (userNumber % 2 === 0) {
		numberParity.innerHTML = 'чётное'
	} else {
    numberParity.innerHTML = 'не чётное'
  }
})

//добавление значений в массив
let array = [];
buttonArray.addEventListener('click', function(){
  let inputArray = document.getElementById('inputArray').value
  array.push(inputArray)
  outArray.innerHTML = array
})

//разворот массива
reverseArray.addEventListener('click', function(){
  let numberArray = array.length - 1;
	let arrayOut = [];
  for (let index = 0; index < array.length; index++) {
    arrayOut.push(array[numberArray]);
    numberArray--;
  }
  array = arrayOut;
  outArray.innerHTML = array;
})

// удаление содержимого массива
deleteArray.addEventListener('click', function(){
  for (let index = 0; index <= array.length; index++){
    if(array[index] === 'false' || array[index] === 'undefined' || array[index] === '' || array[index] === 'ноль' || array[index] === 'null'){
      array.splice(index, 1);
      index--;
    }
  }
  outArray.innerHTML = array;
})