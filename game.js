var numberOfSquares = 6;
var colors = [];

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

resetButton.addEventListener("click", reset);

init();

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

//generates random colors for array
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function init() {
	setupModeButtons();
	setupSquares();
	reset();
}

//generates a random color
function randomColor() {
	var r = ~~(Math.random() * 256);
	var g = ~~(Math.random() * 256);
	var b = ~~(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}

function reset() {
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	colors = generateRandomColors(numberOfSquares);
	pickedColor = colors[~~(Math.random()*colors.length)];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

function setupModeButtons() {
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			reset();
		})
	}
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}