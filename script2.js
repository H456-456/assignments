// задание 1.1
function age(fathersAge, sonsAge) {
  if (fathersAge == fathersAge * -1 || sonsAge == sonsAge * -1) {
    return console.log('возраст не может быть отрицательным')
	}
  return console.log(`задание 1.1:\n${fathersAge - (fathersAge - 2 * sonsAge)}: лет назад отец был старше сына`)
}
age(35,7)

// задание 1.2
function oddNumber(Number) {
  let arrayNumber = [];
  for (let index = 1; index < Number; index++) {
		if(index % 2){
      arrayNumber.push(index)
    }
	}
  return console.log('задание1.2:',arrayNumber);
}
oddNumber(34)

// задание 1.3
function convert_string_to_Number(string) {
  var number = Number(string)
  return console.log('задание 1.3:', number)
}
convert_string_to_Number('234')

// задание 1.4
function divisibleBy(array, divider) {
  let arrayNumber = [];
  for (let numArray of array){
    if (numArray % divider == 0) {
      arrayNumber.push(numArray)
		}
  }
  return console.log('задание 1.4:',arrayNumber)
} 
divisibleBy([2,3,42,5,235,87,56,43,85,99,67,23,5,23,66,34,8,42,1,6],3)
//задание 2.1

var number = {
	x: 5,
	Factorial(){
    let numberX = 1;
    for(let firstNumber = 2; firstNumber < this.x + 1; firstNumber++){
      numberX = numberX * firstNumber
    }
    return numberX
  },
}

console.log('задание 2.1:', number.Factorial())
