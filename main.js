console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen"; 
var cardTwo = "king";
var cardThree = "king";
var cardFour = "queen";

var board = document.getElementById('game-board');

 for (var i=0; i<cards.length; i++) {
var cardElement = document.createElement('div');

cardElement.className = 'card';
 board.appendChild(cardElement);
  }

}

/* if (cardOne === cardFour) {
	alert("You found a match!")
} else if (cardTwo === cardThree)
	alert("You found a match!")
	else {
		alert("Sorry, try again."):
	} */


	