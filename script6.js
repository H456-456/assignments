// задание 1
function calc1(x,y){
	return console.log("задание 1:", x + y)
}
calc1(3,4)

// задание 2
function culc2(x, functio) {
	return console.log('задание 2:', functio(x) ** 2)
}

culc2(8, (x) => {
	return x ** 2
})

// задание 3
function culc3(x,y){
	return console.log('задание 3:', x() + y())
}

culc3(
	() => {
		return 3
	},
	() => {
		return 4
	}
)

// задание 4
function each (array, functio){
	return console.log('задание 4:',functio(array))
}

each([1,2,3,4,5], (array) => {return array.map((x) => ++x)})

// задание 5
let check = 0
function funcCheck() {
	check++
	return console.log('задание 5:', check)
}
funcCheck()
funcCheck()
funcCheck()

// задание 6

const button1 = document.getElementById('button_7_exercise');
button1.addEventListener('click', function(){
	let numberCheck = Number(button1.textContent)
	function shortCircuit(){  
		return ++numberCheck
	}
	button1.innerHTML = shortCircuit()
});

const button2 = document.getElementById('button2_7_exercise')
button2.addEventListener('click', function () {
	let numberCheck = Number(button2.textContent)
	function shortCircuit() {
		return ++numberCheck
	}
	button2.innerHTML = shortCircuit()
})

// задание 7
var array = [
	'red',
	'rgb(255, 102, 0)',
	'yellow',
	'green',
	'lightblue',
	'blue',
	'purple ',
]

const divBackgroundColor1 = document.getElementById('divBackgroundColor1')
const divBackgroundColor2 = document.getElementById('divBackgroundColor2')

function* arrayColor(){
	let arrayColor = 0;
		while(true) yield  arrayColor < 7 ? arrayColor++ : arrayColor = 0
}

var ArrayColor = arrayColor()
var ArrayColor2 = arrayColor()


divBackgroundColor1.addEventListener('click', function(){
	divBackgroundColor1.style.backgroundColor = array[ArrayColor.next().value]
})

divBackgroundColor2.addEventListener('click', function () {
	divBackgroundColor2.style.backgroundColor = array[ArrayColor2.next().value]
})

// задание 8,9
class Worker {
	#nameValue
	#surnameValue
	#rateValue
	#daysValue
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	//проверка имени
	set name(CheckValue) {
		if (CheckValue === String(CheckValue)) this.#nameValue = CheckValue
	}
	get name() {
		return this.#nameValue
	}
	//проверка фамилии
	set surname(CheckValue) {
		if (CheckValue === String(CheckValue)) this.#surnameValue = CheckValue
	}
	get surname() {
		return this.#surnameValue
	}

	//проверка дней работы
	set rate(CheckValue) {
		if (CheckValue > 0) this.#rateValue = CheckValue
	}
	get rate() {
		return this.#rateValue
	}

	//проверка зарплаты
	set days(CheckValue) {
		if (CheckValue > 0) this.#daysValue = CheckValue
	}
	get days() {
		return this.#daysValue
	}

	getSalary() {
		console.log(
			`задание 8,9: зарплата работника ${this.name} ${
				this.surname
			} составляет ${this.days * this.rate}`
		)
	}
}
var worker = new Worker('Иван', 'Иванов', 10, 31);


console.log("задание 8,9:", worker.name)
console.log("задание 8,9:", worker.surname)
console.log("задание 8,9:", worker.rate)
console.log("задание 8,9:", worker.days)
worker.getSalary()

// задание 10

class MyString {
	reverse(string) {return console.log(string.split('').reverse().join(''))}

	ucFirst(string) {return console.log(string.charAt(0).toUpperCase() + string.slice(1))}

	ucWords(string) {return console.log( string.toUpperCase())}
}

var str = new MyString();
str.reverse('abcde')
str.ucFirst('abcde')
str.ucWords('abcde abcde abcde')

// test 
var q, e = 0

if(q > 0){
console.log(e)
}