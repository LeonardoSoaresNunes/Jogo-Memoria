const front = "card_front"
const back ="card_back"
const CARD = "card"
const ICON = "icon"

/*

let techs = ['bootstrap',
'css',
'react',
'php',
'node',
'js',
'htmlcss',
'python',
'c#',
'c'];

let cards = null;

*/
starGame();

function starGame(){
    cards = game.createCardsFromTechs();
    shuffCards(cards);
   /* console.log(cards);*/

    function initlizeCards(cards){
        let  gameBoard = document.getElementById(gameBoard);

        cards.forEach(cards => {
            let cardElement = document.createElement('div');

            cardElement.id = card.id;
            cardElement.classList.add('CARD');
            cardElement.dataset.icon = card.icon;

            creatCardContent(card , cardElement);

            cardElement.addEventListener('click',flipCard());

            gameBoard.appendChild(cardElement);

            
        });
        console.log(gameBoard);
    }
}


function creatCardContent(card , cardElement){

    creatCardFace( FRONT , card , cardElement);
    creatCardFace(BACK , card , cardElement);  
    let cardElement = document.createElement('div');/*Erro nessa Linha  CardElement ja foi Declarado  */

    cardElementFace.classList.add(face)
    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src ="./img" + card.icon + ".jpg";
        cardElementFace.appendChild(iconElement);
        

    }else{
        cardElement.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

function creatCardFace(face , card , element){

}
function shuffCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;
    
    while(currentIndex !== 0 ){
        randomIndex = Math.floor(Math.random () * currentIndex);
        currentIndex--;
        [cards[randomIndex] , cards[currentIndex]] = [cards[currentIndex]]
    }
}

createCardsFromTechs(techs);

/*

function createCardsFromTechs(techs){
    let cards = [];
    for (let tech of techs){
        cards.push(createPairFromTech(tech));

    }
    return cards.flatMap(pair => pair);

    function createPairFromTech(tech){
        return [{
            id:creatIdwidthTech(tech),
            icon:tech,
            flipped:false,
        },{}]
    }
}

function creatIdwidthTech(tech){
    return tech + parseInt(Math.random()*1000);
}

*/
function  flipCard(){
    if(game.setCard(this.id)){

        this.classList.add("flip");
        if(game.secondCard){
        if(game.checkMatch()){
            game.clearCards();  
            if (game.checkGameOver()){
                let gameOverLayer = document.getElementById('gameOver');
                gameOverLayer.style.display = 'flex';

            }    

     }else{

        setTimeout(()=>{
        
            let firstCardView = document.getElementById(game.firstCard.id);
            let secondCard = document.getElementById (game.secondCard.id);

            firstCardView.classList.remove('flip');
            secondCardView.classList.remove('flip');
            game.unflipCards();

         },1000);

        };
    }
   }

}

function restart(){
    
}