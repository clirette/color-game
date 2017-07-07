var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy-btn");
var hardBtn = document.querySelector("#hard-btn");

easyBtn.addEventListener("click", function() {
	h1.style.backgroundColor = "steelblue";
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = colors[~~(Math.random()*colors.length)];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i]; 
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	h1.style.backgroundColor = "steelblue";
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = colors[~~(Math.random()*colors.length)];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]; 
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function() {
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	colors = generateRandomColors(numberOfSquares);
	pickedColor = colors[~~(Math.random()*colors.length)];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
		}
	h1.style.backgroundColor = "steelblue";
});

//Generate number 0-6 to index into colors[]
var pickedColor = colors[~~(Math.random()*colors.length)];
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
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

//generates a random color
function randomColor() {
	var r = ~~(Math.random() * 256);
	var g = ~~(Math.random() * 256);
	var b = ~~(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
}