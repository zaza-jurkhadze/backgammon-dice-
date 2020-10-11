/*var scores, roundScore, activePlayer, dice;




var x = document.querySelector('#current-0').textContent;
console.log(x);


document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'dice-' + dice + '.png';
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
       nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //qurrent score
    scores[activePlayer] += roundScore;
    //update UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 
    //check plyer 
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER'
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    } else {
        nextPlayer();
    }


});

    document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;       
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // 1

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'pllayer 1';
    document.querySelector('#name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.toggle('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
  
};*/

var scores, roundScore, activePlayer, dice, dice1, gameState;
init();
/*document.querySelector('#current-' + activePlayer).textContent = dice;*/



//var x = document.querySelector('#current-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice-0').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameState) {
        dice = Math.floor(Math.random() * 6) + 1;
        dice1 = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        var diceDOM1 = document.querySelector('.dice-0');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        if (dice != 1 && dice1 != 1) {
            //add scores
            roundScore += (dice + dice1);
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    //current score
    if (gameState) {
        scores[activePlayer] += roundScore;
        
        
        // update UI
        var final = document.getElementById('name').value;
        var finalScore;
        if (final) {
            finalScore = final
        } else {
            finalScore = 50;
        };
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check scores
        if (scores[activePlayer] >= finalScore) {
            document.querySelector('#name-' + activePlayer).textContent = ('WINNER!');
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameState = 0;
        } else {
            //next player
            nextPlayer();
        }
    }


});


document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-0').style.display = 'none';
};



function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameState = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name').value = '';
};
