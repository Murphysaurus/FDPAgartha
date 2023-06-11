const Competence = require("../ImACompetence");

class Survie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("REF", 0);
    this.setName("Survie");

  }
}

module.exports = Survie;
