class Rotor {
  constructor(num) {
    this.number = num;
    this.in = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.pos = 0;
    this.init();
    this.stepF = createButton("");
    this.stepF.size(40, 30);
    this.stepF.mouseClicked(() => this.step());
    this.stepB = createButton("");
    this.stepB.size(40, 30);
    this.stepB.mouseClicked(() => this.unStep());
    this.select = createSelect();
    this.select.style("position: fixed");
    this.select.option("I");
    this.select.option("II");
    this.select.option("III");
    this.select.option("IV");
    this.select.option("V");
    this.select.value(this.number);
    this.select.changed(() => {
      this.number = this.select.value();
      this.init();
      this.select.elt.blur();
    });
  }

  init() {
    switch (this.number) {
      case "I":
        this.out = "EKMFLGDQVZNTOWYHXUSPAIBRCJ";
        this.turnover = this.in.indexOf("Q");
        break;
      case "II":
        this.out = "AJDKSIRUXBLHWTMCQGZNPYFVOE";
        this.turnover = this.in.indexOf("E");
        break;
      case "III":
        this.out = "BDFHJLCPRTXVZNYEIWGAKMUSQO";
        this.turnover = this.in.indexOf("V");
        break;
      case "IV":
        this.out = "ESOVPZJAYQUIRHXLNFTGKDCMWB";
        this.turnover = this.in.indexOf("J");
        break;
      case "V":
        this.out = "VZBRGITYUPSDNHLXAWMJQOFECK";
        this.turnover = this.in.indexOf("Z");
        break;
    }
  }

  draw(num) {
    num = 5 - num;
    let x = floor(num * width / 5);
    let y = floor(height / 3);
    this.stepF.position(x - 20, y + 40);
    this.stepB.position(x - 20, y - 40 - 30);
    textAlign(CENTER, CENTER);
    noStroke();
    textSize(24);
    textFont(typewriterDry);
    fill(255);
    text(this.in[this.pos], x, y);
    this.select.position(x - 30, y - 110);
    this.select.style("position: fixed");
    if (num == 3) {
      text("Rotors:", x, y - 150);
    }
    textSize(20);
    fill(150);
    text(this.in[(this.pos - 1 + 26) % 26], x, y - 24);
    text(this.in[(this.pos + 1 + 26) % 26], x, y + 24);
    fill(255);
    beginShape();
    vertex(x - 35, y - 8);
    vertex(x - 35, y + 8);
    vertex(x - 20, y);
    endShape();
    strokeWeight(1);
    noFill();
    stroke(200);
    rect(x - 15, y - 38, 30, 76);
    strokeWeight(2);
    beginShape();
    vertex(x - 8, y - 45);
    vertex(x, y - 55);
    vertex(x + 8, y - 45);
    endShape();
    beginShape();
    vertex(x - 8, y + 45);
    vertex(x, y + 55);
    vertex(x + 8, y + 45);
    endShape();
  }

  forward(char) {
    let i = this.in.indexOf(char);
    return this.out[i];
  }

  backwards(char) {
    let i = this.out.indexOf(char);
    return this.in[i];
  }

  step() {
    this.out = this.out.substr(1) + this.out[0];
    this.pos = (this.pos + 1) % 26;
    if (this.pos == this.turnover) {
      return true;
    }
    return false;
  }

  unStep() {
    this.out = this.out[this.out.length - 1] + this.out.substr(0, this.out.length - 1);
    this.pos = (this.pos - 1 + 26) % 26;
    if (this.pos == this.turnover) {
      return true;
    }
    return false;
  }
}
