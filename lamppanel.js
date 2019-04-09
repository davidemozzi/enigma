class LampPanel {
  constructor() {
    this.lamps = [];
    this.init();
  }

  init() {
    this.lampRadius = floor(width / 44);
    let letters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    for (let i = 0; i < 26; i++) {
      let x, y;
      x = width / 11 * (1 + (i < 10 ? i : i < 19 ? i - 10 : i - 19));
      x += (i < 10 ? 0 : i < 19 ? width / 22 : width / 11);
      y = height / 2 * (1 + (i < 10 ? 1 : i < 19 ? 2 : 3) / 4);
      this.lamps[letters[i]] = {
        x: floor(x),
        y: floor(y),
        char: letters[i],
        lit: false
      };
    }
  }

  draw() {
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    textSize(18);
    textFont(typewriterDry);
    for (let i in this.lamps) {
      if (this.lamps[i].lit) {
        fill(255, 255, 0);
        stroke(51);
      } else {
        fill(51);
        stroke(255);
      }
      circle(this.lamps[i].x, this.lamps[i].y, this.lampRadius);
      if (this.lamps[i].lit) {
        fill(51);
      } else {
        fill(255);
      }
      noStroke();
      text(this.lamps[i].char, this.lamps[i].x, this.lamps[i].y);
    }
  }

  lightUp(i) {
    if (this.lamps[i] != undefined) {
      this.lamps[i].lit = true;
      setTimeout(() => this.lamps[i].lit = false, 500);
    }
  }
}
