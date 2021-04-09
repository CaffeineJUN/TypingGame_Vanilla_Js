
/* ------------------변수------------------ */

let score = 0;
let time = 9;
let isPlaying = false;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

/* ------------------변수------------------ */

wordInput.addEventListener('input', () => {
    if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
        score++;
        scoreDisplay.innerText = score;
        wordInput.value = '';
    }
});

function countDown(){
    time > 0 ? time-- : isPlaying = false;
    timeDisplay.innerText = time;
}

// setInterval(countDown,1000);

function buttonChange(text){
    button.innerText = text;
    text === "게임시작" ? button.classList.remove('loading') : button.classList.add('loading')
}

buttonChange('게임시작');