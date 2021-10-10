let random=Math.floor(Math.random()*10)+1;
// alert(random);
const guesses=document.querySelector('.guesses');
const lastResult=document.querySelector('.lastResult')
const lowOrhigh=document.querySelector('.lowOrhigh');
const guessSubmit=document.querySelector('.guessSubmit');
const guessField=document.querySelector('.guessField');

let guessCount=1;
let resetButton;

function verifyGuess(){
    let userguess=Number(guessField.value);
    
    guesses.textContent+=userguess+' ';
    if(userguess === random){
        lastResult.textContent="Congragulations! you guessed it right";
        lastResult.style.color='yellow';
        lastResult.style.backgroundColor='green';

        lowOrhigh.textContent="Matched";
        setGameOver();
    }
    else if(guessCount===5){
        lastResult.textContent="Game over!!";
        setGameOver();

    }

    else{
        lastResult.textContent='Wrong!';
        lastResult.style.backgroundColor='Red';
        if(userguess<random){
            lowOrhigh.textContent='the number is small';
        }
        else if(userguess>random){
            lowOrhigh.textContent='the number is too large';
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
} 

function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    createResetButton();
}

function createResetButton(){
    resetButton=document.createElement('button');
    resetButton.textContent="Start new game!";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    guessCount=1;

    const resetpara=document.querySelectorAll('.result p');
    for(let i=o;i<resetpara.length;i++){
        resetpara[i].textContent='';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value='';
    guessField.focus();

    lastResult.style.backgroundColor='white';
    random=Math.floor(Math.random()*10)+1;
}

guessSubmit.addEventListener('click', verifyGuess);