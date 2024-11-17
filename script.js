'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1') ;
score0El.textContent = 0;
score1El.textContent = 0;

let score,curr_score,activePlayer,playingState;
// const score= [0,0];
// let curr_score=0;
// let activePlayer = 0;
// let playingState = true;


const curr0El =document.getElementById('current--0');
const curr1El =document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    curr_score = 0;
    activePlayer = activePlayer===0? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
function rollDice(){
    if(playingState){
        const number = Math.trunc(Math.random()*6)+1;
    
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${number}.png`;
        console.log(number);
    
        if(number!==1){
            curr_score += number;
            document.getElementById(`current--${activePlayer}`).textContent =curr_score;
            
        }else{
            switchPlayer();
        }
    }

}

function holdScore(){
    if(playingState){
        score[activePlayer] +=curr_score;
        if(score[activePlayer]>=20){
            playingState =false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        score0El.textContent = score[0];
        score1El.textContent = score[1];
        switchPlayer();

    }

 

}

btnRoll.addEventListener('click',rollDice); 
btnHold.addEventListener('click',holdScore);

 const btnNewgame = document.querySelector('.btn--new');


 function newGame(){

    activePlayer = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    curr0El.textContent = 0;
    curr1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    curr_score = 0;
    score = [0,0];
    playingState =true;

    

 }

 newGame();
 btnNewgame.addEventListener('click', newGame);