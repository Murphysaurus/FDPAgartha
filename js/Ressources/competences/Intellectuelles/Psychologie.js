const Competence = require("../ImACompetence");

class Psychologie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("PER", 0);
    this.setName("Psychologie");

  }
}

module.exports = Psychologie;
