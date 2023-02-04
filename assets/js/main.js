// mix les tetes de chat
const cat1 = './Public/img/tete_chat/cat_1.png',
	cat2 = './Public/img/tete_chat/cat_2.png',
	cat3 = './Public/img/tete_chat/cat_3.png',
	cat4 = './Public/img/tete_chat/cat_4.png',
	cat5 = './Public/img/tete_chat/cat_5.png',
	cat6 = './Public/img/tete_chat/cat_6.png',
	cat7 = './Public/img/tete_chat/cat_7.png',
	cat8 = './Public/img/tete_chat/cat_8.png',
	cat9 = './Public/img/tete_chat/cat_9.png',
	cat10 = './Public/img/tete_chat/cat_10.png',
	cat11 = './Public/img/tete_chat/cat_11.png',
	cat12 = './Public/img/tete_chat/cat_12.png',
	cat13 = './Public/img/tete_chat/cat_13.png'

let array = [
	cat1,
	cat2,
	cat3,
	cat4,
	cat5,
	cat6,
	cat7,
	cat8,
	cat9,
	cat10
]
// mélange des têtes de chats
function shuffle(array) {
	const newArray = array
	const length = newArray.length

	for (let start = 0; start < length; start++) {
		const randomPosition = Math.floor((newArray.length - start) * Math.random())
		const randomItem = newArray.splice(randomPosition, 1)

		newArray.push(...randomItem)
	}

	return newArray
}

// Génération d'un nombre random
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

//Attribution aléatoire des têtes de chat
function attributeCat(array) {
	const shuffledArray = shuffle(array)
	let catContainers = document.querySelectorAll('.cat')

	for (let i = 0; i < catContainers.length; i++) {
		catContainers[i].src = shuffledArray[i]
	}
	const randomCat = randomNumber(0, catContainers.length)

	const startGame = document.getElementById('start_game');
	const oldCat=document.getElementById('oldCat');
console.log(oldCat)
	
	startGame.addEventListener('click', (e) => {
		searchedCat(shuffledArray, randomCat, catContainers)
	})
	if (oldCat){
		
		newSearchedCat(shuffledArray, randomCat, catContainers)
	}
}

//Affichage de la tête de chat à chercher
async function searchedCat(shuffledArray, randomCat, catContainers) {
	const searchCat = await shuffledArray[randomCat]

	const findCat = document.createElement('IMG')
	findCat.setAttribute('id','newCat')
	findCat.src = searchCat
	const oldP = document.getElementById('reponse_1-p')
	if(oldP){
	document.getElementById('reponse_1-parent').replaceChild(findCat, oldP)	
	}
	
	findTheCat(catContainers, searchCat)
}

//Affichage de la tête de chat à chercher
async function newSearchedCat(shuffledArray, randomCat, catContainers) {
	const searchCat = await shuffledArray[randomCat]

	const findCat = document.createElement('IMG')
	findCat.setAttribute('id','newCat')
	findCat.src = searchCat
	const oldP = document.getElementById('oldCat')
	document.getElementById('reponse_1-parent').replaceChild(findCat, oldP)

	findTheCat(catContainers, searchCat)
}
//Trouver le bon chat
function findTheCat(catContainers, searchCat) {
	catContainers.forEach((catContainer) => {
		catContainer.addEventListener('click', (e) => {
			const catSrc = e.currentTarget.getAttribute('src')
			const gameResult = document.getElementById('game_result')

			if (catSrc === searchCat) {
				console.log('yeaah')
				gameResult.style.color = 'green'
				gameResult.innerText = 'Vous avez gagné'
				gameResult.innerHTML=`
				<div class="result__container"> <div class="result__content">
				<p>Félicitations Vous avez gagné</p>
				<p>Voulez-vous <span id="new__game">rejouer</span></p>
				</div></div>`
				gameResult.style.zIndex = "10"
				gameResult.style.transform='translateY(-420px)';
				gameResult.style.transition=" all 1s" 
				newGame(array,gameResult)
			} 
		})
	})
}

attributeCat(array);



 function newGame(array, gameResult){
	const newGameSpan= document.getElementById('new__game')
	
	newGameSpan.addEventListener('click',(e)=>{
		
		gameResult.style.zIndex = "-10"
		console.log('rejouer')
		oldCat=document.getElementById('newCat')
		oldCat.setAttribute('id','oldCat')
		attributeCat(array);

		//penser a clean gameResult
		
		gameResult.innerText = ''
				gameResult.innerHTML=``
			

	})
}