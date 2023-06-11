const Competence = require("../ImACompetence");

class Pistage extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("PER", 0);
    this.setName("Pistage");

  }
}

module.exports = Pistage;
