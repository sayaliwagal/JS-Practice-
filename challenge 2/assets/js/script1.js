

function picGenterator() {
    let image = document.createElement('img');
    let div = document.getElementById('flexPicGen')
    image.src ="https://picsum.photos/200/300?grayscale";
    div.appendChild(image);
}


/* challenge 3 */
function rpsGame(yourChoice){
    console.log(yourChoice.src);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRspInt());
     console.log('Computer choice:' ,botChoice);
    result = decideWinner(humanChoice, botChoice);//[0,1] human lost | bot won
    console.log(result);
    message = finalMessage(result) //{meaasge : "You Won ", "color : green"}
    // console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRspInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors' : 1, 'rock': 0.5, 'paper':0},
        'paper': {'rock' : 1, 'paper': 0.5, 'scissors':0},
        'scissors': {'paper' : 1, 'scissors': 0.5, 'rock':0},

    }
 var yourScore = rpsDatabase[yourChoice][computerChoice];
 var computerScore = rpsDatabase[computerChoice][yourChoice]

 return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return{'message': 'You Lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
        return{'message': 'You Tired!', 'color' : 'yellow'};
    }else{
        return{'message': 'You Win!', 'color' : 'green'};
    }
}

function rpsFrontEnd(humanChoice, botChoice, finalMessage){
    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
     }
     //let's remove imag
     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();

     var humanDiv = document.createElement('div');
     var messageDiv = document.createElement('div');
     var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageData[humanChoice] + "' heigth=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style= 'color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px '>"+ finalMessage['message'] + "</<h1>"
    botDiv.innerHTML = "<img src='" + imageData[botChoice] + "' heigth=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

     document.getElementById('flex-box-rps').appendChild(humanDiv);
     document.getElementById('flex-box-rps').appendChild(messageDiv);
     document.getElementById('flex-box-rps').appendChild(botDiv);


}



/* challenge 4 */
 var allButtons = document.getElementsByTagName('button');
console.log(allButtons);

var copyAllButtons = [];
for(let i =0; i < allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed();
    } else if (buttonThingy.value === 'green'){
        buttonGreen();
    } else if(buttonThingy.value === 'reset'){
        buttonReset();
    } else if(buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let choice = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for(let i=0; i < allButtons.length; i++){
       let randomNum = Math.floor(Math.random() * 4);
       allButtons[i].classList.remove(allButtons[i].classList[1]);
       allButtons[i].classList.add(choice[randomNum]);
    }
}


/* challenge5 : blackjack   */
let blackjackGame = {
    'you'    : {'scoreSpan' : '#your-blackjack-result', 'div' : '#your-box', 'score' : 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div' : '#dealer-box', 'score' : 0},
    'cards'   : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'],
    'cardMap' : {'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'K' : 10, 'J' : 10, 'Q' : 10, 'A' : [1,11]},
    'wins'    : 0,
    'loss'    : 0,
    'draw'    : 0,
    'isStand' : false,
    'trunsOver' : false,

};

const You = blackjackGame['you'];
const Dealer = blackjackGame['dealer'];

const hitSound      = new Audio('assets/sounds/swish.m4a');
const  winSound     = new Audio('assets/sounds/cash.mp3');
const  lossSound    = new Audio('assets/sounds/aww.mp3');

document.querySelector('#blackjack-Hit-btn').addEventListener('click', blackJackHit);

document.querySelector('#blackjack-stand-btn').addEventListener('click', dealerLogic);

document.querySelector('#blackjack-deal-btn').addEventListener('click', blackjackDeal);


function blackJackHit() {
    if(blackjackGame['isStand'] === false){
    let card = randomCard();
    showCard(card, You);  
    upDateScore(card, You);
    showScore(You);
    console.log(You['score']);
    }
}
function randomCard() {
    let ranomImage =Math.floor(Math.random() * 13 );
    return blackjackGame['cards'][ranomImage];
}
function showCard(card, activePlayer) {
    if(activePlayer['score'] <= 21) {
    let cardImage = document.createElement('img');
    cardImage.src = `assets/images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }
}

function blackjackDeal(){
    // let winner = computeWinner();
    if (blackjackGame['trunsOver'] === true){ 
        blackjackGame['isStand'] = false ; 
    let yourImage = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');

    for(let i = 0; i < yourImage.length; i++){
    yourImage[i].remove();
    }

    for(let i = 0; i < dealerImage.length; i++){
        dealerImage[i].remove();
        }

     You['score'] = 0;
     Dealer['score'] = 0;
     
     document.querySelector('#your-blackjack-result').textContent = 0;
     document.querySelector('#dealer-blackjack-result').textContent = 0;

     document.querySelector('#dealer-blackjack-result').style.color =  '#ffffff';
     document.querySelector('#your-blackjack-result').style.color =  '#ffffff';

     document.querySelector('#blackJack-result').textContent ="Let's play";
     document.querySelector('#blackJack-result').style.color = "black";
        blackjackGame['trunsOver'] = false;
    } 
}

function upDateScore(card, activePlayer) {
    if(card === 'A'){
        //If adding 11 keeps me below 21, add 11. Otherwise, add 1
        if(activePlayer['score'] + blackjackGame['cardMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardMap'][card][1];
        }else {
            activePlayer['score'] += blackjackGame['cardMap'][card][0];
        }
    } else {
    activePlayer['score'] += blackjackGame['cardMap'][card];
    }
}

function showScore(activePlayer) {
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        } else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
       
    }
}


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while(Dealer['score'] < 16 && blackjackGame['isStand'] === true){ 
        
        let card = randomCard();
        showCard(card, Dealer);
        upDateScore(card, Dealer);
        showScore(Dealer);
        await sleep(1000);
        }

    
        blackjackGame['trunsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        console.log(blackjackGame['trunsOver']);
    
}


function computeWinner() {
    let winner;

    if(You['score'] <= 21) {
        //condition higher score than dealer or when dealer busts but you're win
    if(You['score'] > Dealer['score'] || (Dealer['score'] > 21)){
        blackjackGame['wins']++;
        winner = You;
    }else if(You['score'] < Dealer['score']) {
        blackjackGame['loss']++;
        winner = Dealer;
    }else if(You['score'] === Dealer['score']) {
        blackjackGame['draw']++;
    }
    //condition when busts but dealer doesn't
    
    
    }else if (You['score'] > 21 && Dealer['score'] <= 21){
        blackjackGame['loss']++;
        winner = Dealer;
        //condition when you and dealer doesn't
    }else if(You['score'] > 21 && Dealer['score'] > 21){
        blackjackGame['draw']++;
    } 
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    if(blackjackGame['trunsOver'] === true){
        let message;
        let messageColor;

    if (winner === You){
        document.querySelector('#wins').textContent = blackjackGame['wins']
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();

    }else if (winner === Dealer){
        document.querySelector('#loss').textContent = blackjackGame['loss']
            message = 'You Loss!';
            messageColor = 'red';
            lossSound.play();

        }else {
            document.querySelector('#draw').textContent = blackjackGame['draw']
            message = 'You Drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackJack-result').textContent = message;
        document.querySelector('#blackJack-result').style.color = messageColor;
    }
}
