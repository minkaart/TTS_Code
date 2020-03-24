var player1 = {
	name: "Scott", 
	getHand, 
	handVal: 0,
	hand: "",  
	wins: 0
}; 

var player2 = {
	name: "David", 
	getHand, 
	handVal: 0,
	hand: "",  
	wins: 0
};


var player3 = {
	name: "Eric", 
	getHand, 
	handVal: 0,
	hand: "",  
	wins: 0
};


var player4 = {
	name: "Niahl", 
	getHand, 
	handVal: 0,
	hand: "",  
	wins: 0
};

//playGame(player1, player2, 5);
playTournament(player1, player2, player3, player4, 3);


function getHand(){
	var val =  parseInt(Math.random()*10)%3;
	var hands = ['rock', 'paper', 'scissors']; 

	this.hand = hands[val];
	this.handVal = val; 
	return val; 
}

function playGame(p1, p2, playUntil){
	while(p1.wins < playUntil && p2.wins < playUntil){
		var winner = playRound(p1, p2); 
		if(winner){
			if(winner == p1){
				p1.wins++; 
			} else if(winner == p2){
				p2.wins++; 
			}
		}
	}
	if(p1.wins == playUntil){
		console.log(p1.name+" wins the game!");
		return p1; 
	} else if (p2.wins == playUntil){
		console.log(p2.name+" wins the game!");
		return p2;
	}
}

function playRound(p1, p2){
	var win = mod(p1.getHand()-p2.getHand(), 3); 
	console.log(p1.name+" threw "+p1.hand);
	console.log(p2.name+" threw "+p2.hand); 
	switch(win){
		case 0: console.log("It's a tie");
				return null; 
				break; 
		case 1: console.log(p1.name+" wins!");
				return p1; 
				break; 
		case 2: console.log(p2.name+" wins!");
				return p2; 
				break; 
	}

}

function playTournament(p1, p2, p3, p4, playUntil){
	var win1 = playGame(p1, p2, playUntil);
	var win2 = playGame(p3, p4, playUntil); 
	win1.wins = 0; 
	win2.wins = 0;

	var winner = playGame(win1, win2, playUntil); 
	console.log(winner.name+" is the world champion"); 
}



//https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
function mod(a, b){
	return ((a%b) + b) % b;  
} 