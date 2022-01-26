

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

const toggle = document.querySelector('.toggle') 
const navigation = document.querySelector('.navigation')
const contain = document.querySelector('.container') 

toggle.onclick = () => {
	toggle.classList.toggle('active')
	navigation.classList.toggle('active')
	contain.classList.toggle('active')
}

const lazyImages = document.querySelectorAll('img[data-src]')
const loadMapBlock = document.querySelector('._load-map')
const windowHeight = document.documentElement.clientHeight
const loadMoreBlock = document.querySelector('.load__more')

let lazyImagesPositions = []
 if (lazyImages.length > 0) {
	 lazyImages.forEach(img => {
		 if (img.dataset.src) {
			 lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
			 lazyScrollCheck()
		 }
	 })
 }

 console.log(lazyImagesPositions)
 window.addEventListener("scroll", lazyScroll)

 function lazyScroll() {
	 if (document.querySelectorAll('img[data-src]').length > 0) {
		 lazyScrollCheck()
	 }
	 if (!loadMapBlock.classList.contains('loaded')) {
		 getMap()
	 }
	 if (!loadMoreBlock.classList.contains('loading')) {
		getContent()
	 }
 }

 function lazyScrollCheck() {
	 let imgIndex = lazyImagesPositions.findIndex(
		 item => pageYOffset > item - windowHeight
		)
		if (imgIndex >= 0) {
			if (lazyImages[imgIndex].dataset.src) {
				lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src 
				lazyImages[imgIndex].removeAttribute('data-src')
			}
			delete lazyImagesPositions[imgIndex]
		}
 }

 function getMap() {
	 const loadBlockMapPos = loadMapBlock.getBoundingClientRect().top + pageYOffset
	 if (pageYOffset > loadBlockMapPos - windowHeight) {
		 const loadMapUrl = loadMapBlock.dataset.map
		 if (loadMapUrl) {
			 loadMapBlock.insertAdjacentHTML(
				 "beforeend",
				 `<iframe src="${loadMapUrl}"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
			 )
			 loadMapBlock.classList.add('loaded')
		 }
	 }
 }

 function loadMore() {
	  const loadMoreBlockPos = loadMoreBlock.getBoundingClientRect().top + pageYOffset
	  const loadMoreBlockHeight = loadMoreBlock.offsetHeight

	  if (pageYOffset > (loadMoreBlockPos + loadMoreBlockHeight) - windowHeight) {
		  getContent()
	  }
 }
 async function getContent() {
	 if (!document.querySelector('.loading__icon')) {
		 loadMoreBlock.insertAdjacentHTML(
			 "beforeend",
			 `<div class="loading__icon"></div>`
		 )
	 }
	 loadMoreBlock.classList.add('loading')

	 let response = await fetch('more.html', {
		 method: 'GET'
	 })
	 if (response.ok) {
		 let result = await response.text()
		 loadMoreBlock.insertAdjacentHTML('beforeend', result)
		 loadMoreBlock.classList.remove('loading')
		 if (document.querySelector('.loading__icon')) {
			 document.querySelector('.loading__icon').remove()
		 } else {
			 alert('error')
		 }
	 }
}

const rating = document.querySelectorAll('.rating')

// основная функция 
const initRatings = () => {
	let ratingActive, ratingValue;

	// инициализация переменных

	// изменяем ширину активных звезд
}
