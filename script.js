// global constants
//may change this if I want to add the level system
const nextClueWaitTime = 800; //how long to wait before starting playback of the clue sequence
const increaseSpeed = 15;

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 400; //how long to pause in between clues

var pointHistory = [];
var level = 1;
var point = 0;
var bestPoint = 0;
var num_button = 4;

var pointElement = document.getElementById("point");
var levelElement = document.getElementById("level");
var bestpointElement = document.getElementById("bestPoint");
var rankingPoint = document.getElementById("rankingPoint");

pointElement.innerHTML = "";
levelElement.innerHTML = "";
bestpointElement.innerHTML = "";


function increasePointEffect(fromNum, toNum, element = pointElement) {
	if (fromNum <= toNum) {
		element.innerHTML = fromNum;
		setTimeout(function () {//Delay a bit before calling the function again.
			increasePointEffect(fromNum + 1, toNum, element);
		}, increaseSpeed);
	}
}


function decreasePointEffect(fromNum, toNum, element) {
	if (fromNum <= toNum) {
		element.innerHTML = fromNum;
		setTimeout(function () {//Delay a bit before calling the function again.
			decreasePointEffect(fromNum - 1, toNum, element);
		}, increaseSpeed);
	}
}

function generatePattern() {
	pattern = [];
	var patternlength = 2 * level + 1;
	for (let i = 0; i < patternlength; i++) {
		var adding = Math.floor(Math.random() * (num_button - 1) + 1) // change base on number of button * num button -1
		//console.log(adding)
		pattern.push(adding);
	}

	console.log("pattern hello")
	console.log(pattern)

}

function displayRanking() {
	console.log("Displaying Ranking");
	var html = "";
	for (let i = 0; i < pointHistory.length; i++) {
		html += "<li>" + pointHistory[i] + "</li>";

	}

	rankingPoint.innerHTML = html;
}

function findBestScore(newScore) {

	if (newScore > bestPoint) {
		bestPoint = newScore;
	}
}

function startGame() {
	//initialize game variables
	generatePattern();
	progress = 0;
	gamePlaying = true;

	//set the starting point and level
	pointElement.innerHTML = point.toString();
	levelElement.innerHTML = level.toString();


	// swap the Start and Stop buttons
	document.getElementById("startBtn").classList.add("hidden");
	document.getElementById("stopBtn").classList.remove("hidden");
	hideGameButton();

	playClueSequence();
}
function stopGame() {
	//initialize game variables
	//progress = 0;
	gamePlaying = false;
	// swap the Start and Stop buttons

	//add current point to point history
	pointHistory.push(point);
	var old_bestPoint = bestPoint;
	findBestScore(point);
	// decreasePointEffect(point, 0);
	// decreasePointEffect(level, 0, levelElement);
	point = 0;
	level = 1;


	document.getElementById("rankdiv").classList.add("appearborder");
	displayRanking();
	hideGameButton();
	num_button = 4;

	clueHoldTime = 1000; //how long to hold each clue's light/sound
	cluePauseTime = 400


	//display and update best point

	increasePointEffect(old_bestPoint, bestPoint, bestpointElement);


	pointElement.innerHTML = "";
	levelElement.innerHTML = "";


	document.getElementById("stopBtn").classList.add("hidden");
	document.getElementById("startBtn").classList.remove("hidden");
	displayGameButton();
}

function disableButton() {
	console.log("disable button")
	for (let i = 1; i <= num_button; i++) {
		document.getElementById("button" + i.toString()).disabled = true;
	}

}

function enableButton() {
	console.log("enable button")

	for (let i = 1; i <= num_button; i++) {
		document.getElementById("button" + i.toString()).disabled = false;
	}

}

function hideGameButton() {
	console.log("hide game button")
	for (let i = 5; i <= 8; i++) {
		document.getElementById("button" + i.toString()).style.display = "none";
	}
}

function displayGameButton() {
	console.log("hide game button")
	for (let i = 5; i <= 8; i++) {
		document.getElementById("button" + i.toString()).style.display = "initial";
	}
}


// Sound Synthesis Functions
//change frequency
const freqMap = {
	1: 275.6,
	2: 350.6,
	3: 320,
	4: 445.2,
	5: 280.4,
	6: 422.6,
	7: 300.5,
	8: 490.8,
};
function playTone(btn, len) {
	o.frequency.value = freqMap[btn];
	g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
	context.resume();
	tonePlaying = true;
	setTimeout(function () {
		stopTone();
	}, len);
}
function startTone(btn) {
	if (!tonePlaying) {
		context.resume();
		o.frequency.value = freqMap[btn];
		g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
		context.resume();
		tonePlaying = true;
	}
}
function stopTone() {
	g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
	tonePlaying = false;
}

function lightButton(btn) {
	//disableButton();
	document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
	//enableButton();
	document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
	if (gamePlaying) {

		lightButton(btn);
		playTone(btn, clueHoldTime);
		setTimeout(clearButton, clueHoldTime, btn);

	}
}


function playClueSequence() {

	disableButton();
	context.resume()
	let delay = nextClueWaitTime; //set delay to initial wait time
	guessCounter = 0;
	var total_delay = delay + (clueHoldTime + cluePauseTime) * progress + clueHoldTime;
	for (let i = 0; i <= progress; i++) { // for each clue that is revealed so far
		console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
		setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue

		//the delay is the time need to combined for the setTimeout func for it to hold until going to the next line of code so it should be the time of the whole 
		//sequence of sound so it should be the time for each sound tone and also the time between each sound tone
		delay += clueHoldTime;
		delay += cluePauseTime;
	}

	setTimeout(enableButton, total_delay)


}

function loseGame() {
	stopGame();
	alert("Game Over. You lost.");
}

function winGame() {
	stopGame();
	alert("Game Over. You win.");
}

function levelUp() {
	level += 1;
	console.log("Level up to ", level);
	progress = 0;
	num_button += 1;
	document.getElementById("button" + (level + 3).toString()).style.display = "initial";
	//decrease make it play faster
	clueHoldTime -= (60 * level); //how long to hold each clue's light/sound
	cluePauseTime -= 60; //how long to pause in between clues
	generatePattern();
	levelElement.innerHTML = level.toString();
}


function guess(btn) {
	console.log("user guessed: " + btn);
	if (!gamePlaying) {
		return;
	}

	// add game logic here
	if (pattern[guessCounter] == btn) {
		//Guess was correct!
		if (guessCounter == progress) {

			increasePointEffect(point, point + level * 10);
			point += level * 10


			if (progress == pattern.length - 1) {

				if (level == 5) { // can be any level for maximum, 5 is good enough for testing
					//GAME OVER: WIN!
					winGame();
				}
				else // if level is not 5 yet
				{
					levelUp(); // reset everything except for point and level with level increase
					playClueSequence()
				}

			} else {
				//Pattern correct. Add next segment
				progress++;
				clueHoldTime -= 22; //how long to hold each clue's light/sound
				cluePauseTime -= 10; //how long to pause in between clues
				playClueSequence();
			}
		} else {
			//so far so good... check the next guess

			guessCounter++;
		}
	}
	else {
		//Guess was incorrect
		//GAME OVER: LOSE!
		loseGame();
	}
}
// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

