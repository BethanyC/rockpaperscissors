// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// on click 
// validate user input
// display the input below the users choice
// generate a random computer choice
// calculate the winner
// display the winner

let choices = ["rock", "paper", "scissors"]

console.log("hello!");

$("#shoot").click(function(){
  let userChoice = $("#input").val().toLowerCase();
  
  if (choices.indexOf(userChoice) == -1) { 
    $("#result").text("Please enter a valid input.");
  }
  
  else { 
    $("#userChoice").text(userChoice);
    
    let computerChoice = generateComputerChoice();
    $("#computerChoice").text(computerChoice);
  
    let result = calculateWinner(userChoice, computerChoice);
    $("#result").text(result);
  }
});

function calculateWinner(userChoice, computerChoice) {
  let result = ""
  if (userChoice == computerChoice) { result = "Nobody wins"}
  else if (userChoice == "rock" && computerChoice == "scissors") { result = "User wins!" }
  else if (userChoice == "paper" && computerChoice == "rock") { result = "User wins!" }
  else if (userChoice == "scissors" && computerChoice == "paper") { result = "User wins!" }
  else { result = "Computer wins!" }
  return result
}

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3))
  return choices[randomNumber]
}

logger.info("HELLOOO");