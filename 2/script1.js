// Задание 1.1 / 1.2

var name = 'Петр'
var surname = 'Петров'
var age = 20

var object = {
	name: name == undefined ? 'Аноним' : name,
	surname: surname == undefined ? 'Анонимович' : surname,
	age: age == undefined ? '? лет' : age + ' лет',
}
console.log(object)

//Задание 1.3
var array = Object.keys(object);
var q = array.length - 1

function rUser(){
  for (let i in object) {
		//alert(object[array[q]])
    q--
	}
}
rUser()

//Задание 1.4
var elem = 'elem'
var color = 'blue'
var border = '1px solid red'
var font = '15px Arial'

var element = {
	id: elem,
	color: color == undefined ? 'blue' : color,
	border: border == undefined ? '1px solid red' : border,
	font: font == undefined ? '15px Arial' : font,
}

console.log(element)

function divv() {
  const div = document.getElementById(element.id)
  div.style.color = element.color
  div.style.border = element.border
  div.style.font = element.font
}
divv()

