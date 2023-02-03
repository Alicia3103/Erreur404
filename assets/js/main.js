// mix les tetes de chat
const cat1="./Public/img/tete_chat/cat_1.png",
cat2="./Public/img/tete_chat/cat_2.png",
cat3="./Public/img/tete_chat/cat_3.png",
cat4="./Public/img/tete_chat/cat_4.png",
cat5="./Public/img/tete_chat/cat_5.png";

let array =[cat1,cat2,cat3,cat4,cat5] 
// mélange des têtes de chats
function shuffle(array) {
    const newArray = array;
    const length = newArray.length;
  
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random());
      const randomItem = newArray.splice(randomPosition, 1);
  
      newArray.push(...randomItem);
    }

    return newArray
}

 // Génération d'un nombre random
function randomNumber(min, max) {                     

    return Math.floor(Math.random() * (max - min) + min);                  

}

//Attribution aléatoire des têtes de chat
 function attributeCat(array){
    const shuffledArray=shuffle(array);
    let catContainers=document.querySelectorAll('.cat');
    
        console.log(shuffledArray)
    for(let i=0;i<catContainers.length;i++){
        catContainers[i].src=shuffledArray[i];
       
    }
    const randomCat=randomNumber(0,catContainers.length)


    searchedCat(shuffledArray,randomCat,catContainers)
    
}


//Affichage de la tête de chat à chercher
function searchedCat(shuffledArray,randomCat,catContainers){
    const searchCat = shuffledArray[randomCat];

    const findCat = document.getElementById('find_cat');
   findCat.src= searchCat;
  
        
    findTheCat(catContainers,searchCat);
}
//Trouver le bon chat
function findTheCat(catContainers,searchCat){

    catContainers.forEach((catContainer) => {

        catContainer.addEventListener('click', (e) => {
            const catSrc= e.currentTarget.getAttribute('src')
            const gameResult = document.getElementById('game_result');
            
                if(catSrc===searchCat){
                        console.log('yeaah')
                    gameResult.style.color='green'
                    gameResult.innerText='Vous avez gagné';
                }else{
                    gameResult.style.color='red'
                    gameResult.innerText='Cherchez encore';
                }
           
        })
    });
}
attributeCat(array);