
// document.querySelector('.message').textContent = "That's Correct BITCH";

// document.querySelector('.secretNumber').textContent = 13;
// 
// document.querySelector('.guess').value = '23';

const secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber)

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log (guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = 'No number!!! WTF ❌';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'That is correct bitch!'
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = "Too high bitch";
        score --;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Booh looser";
            document.querySelector('.score').textContent = 0;
        }  
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = "Too low bitch";
        score --;
        document.querySelector('.score').textContent = score;
    }
}) 


 