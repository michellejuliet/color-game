var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
let status = document.getElementById('status');
let h1 = document.querySelector("h1");
createBlocks(n);
resetGame();

function checkColors(e) {
  // your code here
  let choice = e.target.style.backgroundColor;
  let win = colors[pickedColor];
  if (choice == win) {
    status.innerHTML = 'Correct! You have won. A new game will start shortly';
    h1.style.backgroundColor = choice;
    colors = [choice];

    for (var i = 0; i < colorsBlocks.length; i++) {
      colorsBlocks[i].style.backgroundColor = colors;
    }

    setTimeout(resetGame, 1000);
  } else if (choice != win) {
    status.innerHTML = 'Incorrect, Try again';
    e.target.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

function resetGame() {
  createBlocks(n);
  document.body.style.color = "black";
  h1.style.backgroundColor = '';
  status.innerHTML = '';
  colors = [];
  pickColors();
  pickedColor = random(n);
  rgbEl.innerHTML = colors[pickedColor];
  setColors();
  statusEl.innerHTML =
    "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].style.backgroundColor = colors[i];
  }
}

function pickColors() {
  for (var i = 0; i < n; i++) {
    colors.push(randomColor());
  }
}

function randomColor() {
  return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
  return Math.floor(Math.random() * r);
}

function setNumberOfTiles(e) {
  // your code here
  for (let x = 0; x < 2; x++) {
    if (diffEls[x].innerHTML == e) {
      diffEls[x].classList.add('active');
    } else {
      diffEls[x].classList.remove('active');
    }
  }
  n = e;
  createBlocks(n);
  resetGame();
}

function createBlocks(num) {
  colorsEl.innerHTML = "";

  // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners

  for (var i = 0; i < num; i++) {
    var block = document.createElement("div");
    block.classList.add("colors__block");
    colorsEl.appendChild(block);
  }
  colorsBlocks = document.querySelectorAll(".colors__block");
  for (var i = 0; i < colorsBlocks.length; i++) {
    colorsBlocks[i].addEventListener("click", checkColors);
  }
}
