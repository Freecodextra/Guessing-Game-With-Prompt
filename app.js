//Get Username 
var username = prompt("Welcome to Guessing Game. Enter a username");
function start() {
  var username = prompt("Welcome to Guessing Game. Enter a username");
  random(1);
 }
 
  // GAME FUNCTION 
  function random(level) {
    //Get Number
    var num = prompt("Choose a number between 1 and "+ (level+1));
    //Get Random Number
    var randNum = Math.round(Math.random() * (level + 1));
    randNum = randNum === 0 ? 1 : randNum;
    if(num == randNum) {
      alert("Welcome to Level "+ (level+1));
      random(level + 1);
    } else if (num != randNum) {
      alert("Game Over "+ username + " Your Final Level is "+ level + " & Your Score is "+ (level-1));
      var restart = window.confirm("Do You Want To Restart?");
      if (restart) {
        random(1);
      }
    }
  }
  random(1);
