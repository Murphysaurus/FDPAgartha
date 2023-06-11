const Competence = require("../ImACompetence");

class Medecine extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Medecine");

  }
}

module.exports = Medecine;
