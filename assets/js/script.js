const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('button');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
let userChoice;
let computerChoice;
let result;
let userscore = 0;
let computerscore = 0;
let turns = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
   gameover()
}))

function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 3) + 1
   
   if (randomNumber === 1) {
      computerChoice = 'rock'
   }
   if (randomNumber === 2) {
      computerChoice = 'paper'
   }
   if (randomNumber === 3) {
      computerChoice = 'scissors'
   }
   computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
   
   if (computerChoice === userChoice) {
      result = 'Tie'
   }else if(userChoice === 'rock') {
      if(computerChoice === 'scissors') {
         result = 'you win'
         userscore++
         win.innerHTML = userscore
      }else {
         result = 'you lose'
         computerscore++
         lose.innerHTML = computerscore
      }
   }
   else if(userChoice === 'paper') {
      if(computerChoice === 'rock') {
         result = 'you win'
         userscore++
         win.innerHTML = userscore
      }else {
         result = 'you lose'
         computerscore++
         lose.innerHTML = computerscore
      }
   }
   else if(userChoice = 'scissors') {
      if(computerChoice === 'paper') {
         result = 'you win'
         userscore++
         win.innerHTML = userscore
      }else{
         result = 'you lose'
         computerscore++
         lose.innerHTML = computerscore
      }
   }
   resultDisplay.innerHTML = result
}

function gameover() {
   const turnsLeft = document.querySelector('.turns-left');
   turns++;
   turnsLeft.innerHTML = 5-turns
}

