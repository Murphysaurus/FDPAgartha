const Competence = require("../ImACompetence");

class Langues extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Langues");

  }
}

module.exports = Langues;
