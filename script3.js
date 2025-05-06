//задание 1
function array_Clone(array){
  let cloneArray = [];
  for(let i = 0; i < array.length; i++){
    cloneArray[i] = array[i]
  }
  return console.log('задание 1:', cloneArray)
} 
array_Clone([1, 2, [4, 0]])

//задание 2
function is_array(params) {
	Array.isArray(params) ? console.log('задание 2: true') : console.log('задание 2: false')
}
is_array([])

//задание 3
function firstElement(params, elem = 1) {
  let elements = []
  let elemFix = elem

  if (params.length < elem) {
    elemFix = params.length
  }

  for (let index = 0; index < elemFix; index++) {
		elements.push(params[index])
	} 

  console.log('задание 3:', elements)
}
firstElement([7, 9, 0, -2], 6)

//задание 4

function string(array) {
  let convert = ""
  convert = convert + `задание 4: ${array[0]}`
  for (let index = 1; index < array.length; index++) {
    convert = convert + `, ${array[index]}`
  } 
  return console.log(convert)
}
string(["Red", "Green", "White", "Black"])




