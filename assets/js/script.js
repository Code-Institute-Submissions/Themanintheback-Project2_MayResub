const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
let userChoice
let computerChoice
let result
let userscore = 0
let computerscore = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
   win()
}))

function generateComputerChoice() {
   const randomNumber = Math.floor(Math.random() * 5) + 1
   
   if (randomNumber === 1) {
      computerChoice = 'rock'
   }
   if (randomNumber === 2) {
      computerChoice = 'paper'
   }
   if (randomNumber === 3) {
      computerChoice = 'scissors'
   }
   if (randomNumber === 4) {
      computerChoice = 'lizard'
   }
   if (randomNumber === 5) {
      computerChoice = 'spock'
   }
   computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
   if(computerChoice === userChoice) {
      result = 'Tie!'
   }
   if(computerChoice === 'rock' && userChoice === 'paper') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'rock' && userChoice === 'lizard') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'paper' && userChoice === 'spock') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'paper' && userChoice === 'rock') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'scissors' && userChoice === 'paper') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'scissors' && userChoice === 'lizard') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'lizard' && userChoice === 'spock') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'lizard' && userChoice === 'paper') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'lizard' && userChoice === 'rock') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'lizard' && userChoice === 'scissors') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'spock' && userChoice === 'rock') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   if(computerChoice === 'spock' && userChoice === 'paper') {
      result = 'you win!'
      userscore++
      win.innerHTML = userscore
   }
   if(computerChoice === 'spock' && userChoice === 'scissors') {
      result = 'you lose!'
      computerscore++
      lose.innerHTML = computerscore
   }
   resultDisplay.innerHTML = result
   
   // function win() {
   // userscore++
   // win.innerHTML = userscore
   // }
}

