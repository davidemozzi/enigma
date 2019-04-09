class Reflector {
  constructor(type) {
    this.type = type;
    this.in = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.init();
    this.select = createSelect();
    this.select.style("position: fixed");
    this.select.option("A");
    this.select.option("B");
    this.select.option("C");
    this.select.value(this.type);
    this.select.changed(() => {
      this.type = this.select.value();
      this.init();
      this.select.elt.blur();
    });
  }

  init() {
    switch (this.type) {
      case "A":
        this.out = "EJMZALYXVBWFCRQUONTSPIKHGD";
        break;
      case "B":
        this.out = "YRUHQSLDPXNGOKMIEBFZCWVJAT";
        break;
      case "C":
        this.out = "FVPJIAOYEDRZXWGCTKUQSBNMHL";
        break;
    }
  }

  draw() {
    textAlign(CENTER, CENTER);
    noStroke();
    textSize(24);
    textFont(typewriterDry);
    fill(255);
    let x = floor(width / 5) - 20;
    let y = floor(height / 3);
    text("Reflector: ", x, y);
    this.select.position(x + 65, y - 16);
    this.select.style("position: fixed");
  }

  reflect(char) {
    let i = this.in.indexOf(char);
    return this.out[i];
  }
}
