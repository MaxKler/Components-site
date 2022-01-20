

// let arr = [
// 	{name: "Max", money: 987000},
// 	{name: "Ira", money: 18904},
// 	{name: "Nick", money: 3402},
// 	{name: "Olga", money: 12345},
// 	{name: "Ter", money: 76844},
// 	{name: "Bvf", money: 6784},
// ]

// arr.sort((a, b) => {
//     return  a.money - b.money 
// })

// console.log(arr)

const towns = document.getElementById('towns')
const tow = document.getElementById('tow')

towns.insertAdjacentHTML(
	'afterend',
	`<div>Текст</div>`
)
let gdy = 'Текст 1'
const newDiv = document.createElement('div')

newDiv.innerHTML = `
${gdy}
`
tow.before(newDiv)


// форма с символами
const txtItem = document.querySelector('.textarea__item')
const txtItemLimit = txtItem.getAttribute('maxlength')
const txtCounter = document.querySelector('.textarea__counter span')

const menuBody = document.querySelector('.menu')

document.addEventListener("click", menu)

function menu(event) {
	console.log(event)
	if (event.target.closest('.menu__button')) {
		menuBody.classList.toggle('_active')
	}
	if (!event.target.closest('.menu')) {
		menuBody.classList.remove('_active')
	}
}
txtCounter.innerHTML = txtItemLimit


txtItem.addEventListener("keyup", txtSetCounter)
txtItem.addEventListener("keydown", function (e) {
	if (e.repeat) {
		txtSetCounter()
	}
})

function txtSetCounter() {
	const txtCounterResult = txtItemLimit - txtItem.value.length
	txtCounter.innerHTML = txtCounterResult
}

document.addEventListener("keyup", function (event) {
	console.log(event)
	if (event.code === "Escape") {
		menuBody.classList.remove('_active')
	}
})