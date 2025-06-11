let math = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessnum");
const prevguesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const lowOrhi = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultparas");

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const usernum = parseInt(userInput.value);
        validGuess(usernum);
    });
}

function validGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a number");
    } else if (guess < 1) {
        alert("please enter a number more than one");
    } else if (guess > 100) {
        alert('please enter a number less than 100');
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayGuess(guess);
            displayMessage(`Game OVER! Number was ${math}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === math) {
        displayMessage("You guessed it right!");
        endGame();
    } else if (guess < math) {
        displayMessage("Your guess is too low!");
    } else if (guess > math) {
        displayMessage("Your guess is too high!");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevguesses.innerHTML += `${guess} <br>`;
    numguess++;
    remaining.innerHTML = `${11 - numguess}`;
}

function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function startGame() {
    const button = document.querySelector("#newgmae");
    button.addEventListener('click', function () {
        math = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        remaining.innerHTML = `${11 - numguess}`;
        prevguesses.innerHTML = "";
        userInput.removeAttribute('disabled');
        startover.removeChild(p);
        playgame = true;
    });
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newgmae">Start New Game</h2>`;
    startover.appendChild(p);
    playgame = false;
    startGame();
}
