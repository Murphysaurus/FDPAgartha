const Competence = require("../ImACompetence");

class Chirurgie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Chirurgie");
    this.isUsable(false);
  }
}

module.exports = Chirurgie;
