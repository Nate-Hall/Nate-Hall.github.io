var scores = [0, 0];
var maxScore = 11;
var currentServer = -1;
var hasServed = false;
var winnerDeclared = false;

function CheckScore() {
	if(scores[0] >= maxScore-1 && scores[1] >= maxScore-1) {
		if(scores[0] - scores[1] >= 2) {
			DeclareWinner(0);
		} else if(scores[1] - scores[0] >= 2) {
			DeclareWinner(1);
		}
	} else if(scores[0] >= maxScore) {
		DeclareWinner(0);
	} else if(scores[1] >= maxScore) {
		DeclareWinner(1);
	}
}

function UpdateScreen() {
	document.getElementById("P1ScoreLabel").innerHTML = scores[0];
	document.getElementById("P2ScoreLabel").innerHTML = scores[1];

	document.getElementById("P1ScoreLabel").style.textDecoration = 'none';
	document.getElementById("P2ScoreLabel").style.textDecoration = 'none';

	document.getElementById("P" + (currentServer+1) + "ScoreLabel").style.textDecoration = 'underline';
}

function AddPoint(pointAmount, playerNum) {
	if(!winnerDeclared) {
		if(hasServed) {
			scores[playerNum] += pointAmount;

			if(scores[playerNum] < 0) {
				scores[playerNum] = 0;
			}

			var sumScores = scores[0] + scores[1];
			if((sumScores < 20 && sumScores % 2 == 0) || sumScores > 20) {
				if(currentServer == 0) {
					currentServer = 1;
				} else {
					currentServer = 0;
				}
			}
		} else {
			currentServer = playerNum;
			hasServed = true;
		}

		UpdateScreen();
		CheckScore();
	}
}

function DeclareWinner(playerNum) {
	winnerDeclared = true;

	if(playerNum ==0) {
		document.getElementById("LeftPlayerContent").style.borderWidth = '8px';
	} else {
		document.getElementById("RightPlayerContent").style.borderWidth = '8px';
	}
}

function ResetGame() {
	document.getElementById("LeftPlayerContent").style.borderWidth = '1px';
	document.getElementById("RightPlayerContent").style.borderWidth = '1px';

	scores = [0, 0];
	hasServed = false;
	currentServer = -1;
	winnerDeclared = false;

	UpdateScreen();
}