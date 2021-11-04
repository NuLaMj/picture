let scores,roundScore,activePlayer,gamePlaying;

// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';

// document.querySelector('#current--0').textContent = '0';
// document.querySelector('#current--1').textContent = '0';

// document.querySelector('.dice').style.display = 'none';

init();

document.querySelector(".btn--roll").addEventListener('click',function(){
    if(gamePlaying){
        // Random Number generating
    let dice = Math.floor(Math.random()*6)+1;
    //Display the result
    const domDice = document.querySelector('.dice');
    domDice.src = "dice-"+dice+".png";
    document.querySelector('.dice').style.display = "block";
    //add roundScore
    if(dice !== 1){
        roundScore = roundScore + dice;
        document.querySelector('#current--'+activePlayer).textContent = roundScore;
        gamePlaying = false;

    }
    
    }else{
        switchPlayer();
    }
   
})

document.querySelector('.btn--new').addEventListener('click',function(){
    init();
})

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        //scores[activePlayer] += roundScore;
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById('score--'+activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >=20){
        document.getElementById(`name--${activePlayer}`).textContent = "WINNER";
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        gamePlaying = false;
    }
    
    }else{
        switchPlayer();
    }
    
})

function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1:activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current--0').textContent = "0";
    document.querySelector('#current--1').textContent = "0";

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = "none";

}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';

    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector(`.player--0`).classList.remove('player--winner');
    document.querySelector(`.player--1`).classList.remove('player--winner');
    document.getElementById(`name--0`).textContent = "player - 1";
    document.getElementById(`name--1`).textContent = "player - 2";
    document.querySelector(`.player--0`).classList.remove('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`.player--0`).classList.add('player--active');

}
    



