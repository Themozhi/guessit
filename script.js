'use strict';
let secretNumber=Math.trunc(Math.random()*15)+1;
let score=15;
let highscore=0;
const displayMsg=function(message){
    document.querySelector('.message').textContent=message
}
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if (!guess){
            displayMsg('Invalid input');
    }else if(secretNumber===guess){
        displayMsg('Congratulations!! Correct Guess!');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if (score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    } else if (guess!==secretNumber){
        if (score>1){
            document.querySelector('.message').textContent= guess > secretNumber ?'Too High!':'Too low!';
            score--;
            document.querySelector('.score').textContent=score;
        } else {
            displayMsg('You lost the game');
            document.querySelector('.score').textContent=0;
        }
    }
});
document.querySelector('.again').addEventListener('click',function() {
    score=15;
    secretNumber=Math.trunc(Math.random() * 15)+1;
    displayMsg('Start Guessing!!');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});
