const randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submit');
const userInput=document.querySelector('#random');
const guessSlot=document.querySelector('.previous');
const remainingGuesses=document.querySelector('.remaining');
const value=document.querySelector('.lowOrHi');
const result=document.querySelector('.result');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault(); 
        const guess=parseInt(userInput.value);
        validateGuess(guess);
})
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter number between 1 and 100");
    }
    else if(guess<1){
        alert("please enter number between 1 and 100"); 
    }
    else if(guess>100){
        alert("please enter number between 1 and 100"); 
    }
    else {
        prevGuess.push(guess);
        if(numGuess===5){
            displayGuess(guess);
            displayMessage(`Game Over!! Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("Congratulations, you guess the number");
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage("Your number is too low");
    }
    else{
        displayMessage("Your number is too high"); 
    }
}

function displayGuess(guess){
    userInput.value="";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainingGuesses.innerHTML = `${6-numGuess}`;
}

function displayMessage(message){
    value.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value="";
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`;
    result.appendChild(p);
    playGame="false";
    newGame();
}

