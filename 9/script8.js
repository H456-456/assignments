//задание 1
var str = 'test'
console.log(`задание 1.1: ${str[0]}, ${str[1]}, ${str[2]}`)

function strLog(str) {
	for (let i = 0; i < str.length; i++) {
	 console.log('задание 1.2:', str[i])
	}
}
strLog('qwe')

//задание 2
function strNum(params) {
  return console.log('задание 2:',Number(params))
}

strNum('1234')
//задание 3
var num = 1;
num += 12;
num -= 14;
num *= 5; num /= 7;
num++;
num--;

//задание 4
var array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

function arrayNum(array) {

  var numberArray = 0

  function arrayRecursion(arrayR){
    for(let ii of arrayR){
      if (ii === Object(ii)) {
        arrayRecursion(ii)
      }
    numberArray++
    }
  }

  for (let i of array) {
    if (i === Object(i)) {
      arrayRecursion(i)
    }
    numberArray++
  }
  return console.log('задание 4: ', numberArray)
}

arrayNum(array)

//задание 5
var array = [2, 5, 6, 9]

function arrayCalc(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if (i == arr.length - 1){
      if (i % 2) {
				newArr.push(arr[i] - 0)
        return console.log('задание 5: ', newArr)
			} else {
				newArr.push(arr[i] + 0)
        return console.log('задание 5: ', newArr)
			}
    }
//
		if (i % 2) {
			newArr.push(arr[i] - arr[i + 1])
		} else {
			newArr.push(arr[i] + arr[i + 1])
		}
  }
  return console.log("задание 5: ", newArr)
}

arrayCalc(array)

//задание 6
var months = [
	'янв',
	'фев',
	'мар',
	'апр',
	'май',
	'июн',
	'июл',
	'авг',
	'сен',
	'окт',
	'ноя',
	'дек',
]
var date = new Date()
console.log('задание 6: ', months[date.getMonth()])

//задание 7
console.log("задание 7: ",(Date.parse(date) - Date.parse('1988-02-1'))/1000/60/60)
//задание 8 
console.log('задание 8: ', Date.parse(date) / 1000 / 60)
// задание 9
const elem = document.querySelectorAll('.elem')
for(let i = 0; i < elem.length; i++){
	elem[i].style.cssText = `
	background-color: red;
	width: 30px;
	height: 30px;
	border: 1px solid black;
	color: white;
	`
}

//задание 10
const input = document.getElementById('input')

input.addEventListener('blur', function () {
	let name = input.value
  let newName =""
  for (let i = 0; i < name.length; i++) {
		if (name[i] == ' ') {
			name = `${name[0].toUpperCase() + name.slice(1)}`
			newName += `${name.substring(0, i)} `
			name = name.substring(i + 1, name.length)
      i = 0 
		}
	}
  name = `${name[0].toUpperCase() + name.slice(1)}`
	newName += name
  input.value = newName
})

//задание 11
 let str1 = 'Привет, '
 let str2 = 'Мир!'


 function hello(str, str2) {
	let strNew = str + str2
	 let n = 0
	for (let i of strNew) {
		if(i =="и"){
			n++
		}
	}
	return console.log('задание 11: ', strNew,n)
 }

 hello(str1, str2)

 //задание 12
 let age = 999
 console.log(`задание 12: мне ${age} лет!`)

//задание 13
let exercise13 = 0
const elemExercise = document.getElementsByClassName('elem')[1]
setInterval(function(){
	elemExercise.innerHTML = exercise13
	exercise13++
},1000)

//задание 14
const divExercise14 = document.getElementById('exercise14')
let second = 0;
let minute = 0;
let hour = 0;
// функция часов

setInterval(function () {
	second++
	// минуты
	if (second == 60) {
		second = 0
		minute++
	}
	// часы
	if (minute === 60) {
		minute = 0
		hour++
	}
// часы
// меньше 10 часов
	if (second < 10 && minute < 10 && hour < 10) {
		divExercise14.innerHTML = `0${hour}:0${minute}:0${second}`
	} else if (minute < 10 && hour < 10) {
		divExercise14.innerHTML = `0${hour}:0${minute}:${second}`
	} else if (second < 10 && hour < 10) {
		divExercise14.innerHTML = `0${hour}:${minute}:0${second}`
	} else if (hour < 10) {
		divExercise14.innerHTML = `0${hour}:${minute}:${second}`
	}else if (second < 10 && minute < 10) { /* больше 10 часов*/
		divExercise14.innerHTML = `${hour}:0${minute}:0${second}`
	} else if (minute < 10) {
		divExercise14.innerHTML = `${hour}:0${minute}:${second}`
	} else if (second < 10) {
		divExercise14.innerHTML = `${hour}:${minute}:0${second}`
	} else {
		divExercise14.innerHTML = `${hour}:${minute}:${second}`
	} 
}, 1000)

// задание 15
const elemExercise15 = document.getElementsByClassName('elem')[2]
const buttonExercise15_Start = document.getElementById('buttonExercise15_Start')
const buttonExercise15_Stop = document.getElementById('buttonExercise15_Stop')
const buttonExercise15_reset = document.getElementById('buttonExercise15_reset')
let numberExercise15 = 0;
let numberStopInterval = 1;

let setInterval_1;

buttonExercise15_Start.addEventListener('click', function(){
	if (numberStopInterval)
		setInterval_1 = setInterval(function () {
			numberExercise15++
			elemExercise15.innerHTML = numberExercise15
		}, 100)
		numberStopInterval = 0
})

buttonExercise15_Stop.addEventListener('click', function(){
	clearInterval(setInterval_1)
	numberStopInterval = 1
	elemExercise15.innerHTML = numberExercise15
})

buttonExercise15_reset.addEventListener('click', function () {
	clearInterval(setInterval_1)
	numberStopInterval = 1
	numberExercise15 = 0
	elemExercise15.innerHTML = numberExercise15
})

// задание 16
let img = document.getElementById('imgExercise16')
let imgExercise16 = 1
console.log(img.src)

setInterval(() => {
	if(imgExercise16 == 4){
		imgExercise16 = 1
	}

	img.src = `https://h456-456.github.io/assignments/9/img/${imgExercise16}.jpg`
	imgExercise16++
}, 1000);

// задание 17
let aExercise17 = document.getElementById('aExercise17')

aExercise17.addEventListener('mouseenter', () =>{
	aExercise17.title = 'https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D0%BA%D0%B8'
})
