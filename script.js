
// document.querySelector('.message').textContent = "That's Correct BITCH";

// document.querySelector('.secretNumber').textContent = 13;
// 
// 

let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log (guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!!! WTF ❌';
    } else if (guess === secretNumber){
        // no input
        document.querySelector('.message').textContent = 'That is correct bitch!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor ='#60b347'
        document.querySelector('.number').style.width = '20rem'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // win
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = "Too high bitch";
            // too low
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Booh looser";
            document.querySelector('body').style.backgroundColor ='rgb(154, 45, 45)';
            // too low
            document.querySelector('.score').textContent = 0;
        }  
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = "Too low bitch";
        score --;
        document.querySelector('.score').textContent = score;
    }
}) 
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;

    document.querySelector('.message').textContent = "Start guessing again...";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor ='#222'

})



 