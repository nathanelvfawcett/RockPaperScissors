var selection;
var pcSelection;
var winner;

function playerSelection(selection){
  this.selection=selection;
  document.getElementById("player-game-text").innerHTML = "Player has chosen " + selection;
  pcRandomSelection();
}
function pcRandomSelection(){
  var n = Math.random();
  n=n*3;
  n=Math.floor(n);

  switch(n){
    case 0:
      pcSelection = "Rock";
      break;
    case 1:
      pcSelection = "Paper";
      break;
    case 2:
      pcSelection = "Scissors";
      break;
  }
    document.getElementById("pc-game-text").innerHTML = "PC has chosen " + pcSelection;
  andTheWinnerIs();
}
function andTheWinnerIs(){
  if (selection==="Rock"){ //************************************ ROCK
    if (pcSelection === "Rock"){
      winner = "Tied";
    }else if(pcSelection === "Paper"){
      winner = "PC";
    }else{ // pcSelection === "Scissors"
      winner = "Player";
    }

  }else if(selection==="Paper"){ //***************************** PAPER
    if (pcSelection === "Rock"){
      winner = "Player";
    }else if(pcSelection === "Paper"){
      winner = "Tied";
    }else{ // pcSelection === "Scissors"
      winner = "PC";
    }
  }else{  // *************************************************** SCISSORS
  if (pcSelection === "Rock"){
      winner = "PC";
  }else if(pcSelection === "Paper"){
      winner = "Player";
  }else{ // pcSelection === "Scissors"
      winner = "Tied";
  }
  }
  if(winner==="Tied"){
    document.getElementById("winner-game-text").innerHTML = winner;
  }else{
    document.getElementById("winner-game-text").innerHTML = winner + " wins!";
  }
}
