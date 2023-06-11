const Competence = require("../ImACompetence");

class Charme extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Charme");
  }
}

module.exports = Charme;
