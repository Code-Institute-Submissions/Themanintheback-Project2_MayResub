const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll('.button');
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
   countDown()
   
   
   // Calls the gameOver function after 5 turns

   if(turns == 5) {
      gameOver(possibleChoices, countDown)
   }
   

}))

/**
 * This generates random numbers between 1 - 3 for the computer by giving 
 * them the value of Rock, Paper and Scissors. Which will then be displayed 
 * to the player.
 */
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

/**
 * This checkes the players choice(the buttons) with the computers choice(generateComputerChoice)
 * to determine the win and loser. Then will increment either scores by 1.
 */
function getResult() {
   
   if (computerChoice === userChoice) {
      result = 'Tie'
   }else if(userChoice === 'rock') {
      if(computerChoice === 'scissors') {
         result = 'you win'
         userscore++ // increments user score by 1 if won
         win.innerHTML = userscore
      }else {
         result = 'you lose'
         computerscore++ // increments computers score by 1 if user lost
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

/**
 * This tells the user how many turns they have left by listening for the 
 * users clicks of the buttons on the page.
 */
function countDown() {
   const turnsLeft = document.querySelector('.turns-left');
   turns++; // incrementes the turns by 1
   turnsLeft.innerHTML = 5-turns // Displays turns left 
}

/**
 * This will check the user score and the computers score the determine the 
 * winner of the game and display it to the user.
 */
function gameOver(possibleChoices, countDown) {
   if(userscore > computerscore) {
      alert('you win')
      location.reload()
   }else if(userscore < computerscore) {
      alert('you lose')
      location.reload()
   }else {
      alert('Tie')
      location.reload()
   }

}