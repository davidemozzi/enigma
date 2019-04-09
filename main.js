let typewriterDry;
let enigma;
let shouldResize = false;
let resizeButton = null;

document.addEventListener("keydown", keydown);

function preload() {
  if (window.location.protocol == "https:" || window.location.protocol == "http:") {
    typewriterDry = loadFont("TypewriterDry.otf");
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  enigma = new EnigmaMachine("I", "II", "III", "A");
}

function draw() {
  background(51);
  enigma.draw();
  if (shouldResize) {
    textAlign(LEFT, TOP);
    noStroke();
    textSize(20);
    textFont(typewriterDry);
    fill(255, 0, 0);
		if (resizeButton == null || resizeButton.elt.isConnected == false) {
			resizeButton = createButton("");
			resizeButton.position(0, 0);
			resizeButton.size(200, 30);
			resizeButton.mouseClicked(resize);
		}
		text("CLICK TO RESIZE", 10, 10);
  }
}

function keydown(e) {
	if (e.key == "Backspace") {
		enigma.label.elt.innerText = "";
		return;
	}
  let char = e.key.toUpperCase();
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (str.includes(char)) {
    enigma.input(char);
  }
}

function windowResized() {
  shouldResize = true;
}

function resize() {
	shouldResize = false;
  resizeCanvas(innerWidth, innerHeight);
  enigma.resize();
	resizeButton.remove();
}
