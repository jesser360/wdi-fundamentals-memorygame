
var cards = ["q", "q", "k" , "k"];
var cardsInPlay= [];
var board = document.getElementById('game-board');
var matches = 0;
var misses = 0;
var matchesDisplayed = document.getElementById('matches-displayed')
var missesDisplayed = document.getElementById('misses-displayed')

var createBoard = function () {
	for (var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = "card";
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
}


var isTwoCards = function(){
	cardsInPlay.push(this);
	if (this.getAttribute('data-card') === 'k') {
		this.innerHTML = '<img src="http://vignette1.wikia.nocookie.net/muppet/images/3/32/1978_playing_cards_King_Diamonds.png/revision/latest?cb=20120528214112">';
	} else {
		this.innerHTML = '<img src="http://vignette3.wikia.nocookie.net/muppet/images/a/ae/1978_playing_cards_Queen_Hearts.png/revision/latest?cb=20120528214113">';
	} 


	if (cardsInPlay.length == 2){
		isMatch(cardsInPlay);
		setTimeout(resetCards,1000);
	}
}

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0].getAttribute('data-card') === cardsInPlay[1].getAttribute('data-card')) {
		alert("You found a match!");
		matches++;
		matchesDisplayed.innerHTML = matches;
		
	} else {
		alert("Sorry,try again");
		misses++;
		missesDisplayed.innerHTML = misses;
	}
}
var resetCards = function(){
	for(var i = 0; i < cardsInPlay.length; i ++){
		cardsInPlay[i].innerHTML = "";
	}
	cardsInPlay = [];
}
createBoard();



