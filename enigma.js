class EnigmaMachine {
  constructor(firstRotor, secondRotor, thirdRotor, reflectorType) {
    this.lampPanel = new LampPanel();
    this.firstRotor = new Rotor(firstRotor);
    this.secondRotor = new Rotor(secondRotor);
    this.thirdRotor = new Rotor(thirdRotor);
    this.reflector = new Reflector(reflectorType);
    this.label = createP("");
    this.label.position(floor(width / 2), floor(height / 2) - 30);
    this.label.style("position: fixed");
  }

  draw() {
    this.lampPanel.draw();
    this.firstRotor.draw(1);
    this.secondRotor.draw(2);
    this.thirdRotor.draw(3);
    this.reflector.draw();
  }

  input(inChar) {
    let turnover = this.firstRotor.step();
    if (turnover) {
      turnover = this.secondRotor.step();
      if (turnover) {
        turnover = this.thirdRotor.step();
      }
    }
    let outChar;
    outChar = this.firstRotor.forward(inChar);
    outChar = this.secondRotor.forward(outChar);
    outChar = this.thirdRotor.forward(outChar);
    outChar = this.reflector.reflect(outChar);
    outChar = this.thirdRotor.backwards(outChar);
    outChar = this.secondRotor.backwards(outChar);
    outChar = this.firstRotor.backwards(outChar);
    console.log(outChar);
    this.label.elt.innerText += outChar;
    let x = floor(width / 2) - textWidth(this.label.elt.innerText) / 2;
    let y = floor(height / 2) - 30;
    this.label.position(x, y);
    this.label.style("position: fixed");
    this.lampPanel.lightUp(outChar);
  }

  resize() {
    this.lampPanel.init();
    let x = floor(width / 2) - textWidth(this.label.elt.innerText) / 2;
    let y = floor(height / 2) - 30;
    this.label.position(x, y);
    this.label.style("position: fixed");
  }
}
