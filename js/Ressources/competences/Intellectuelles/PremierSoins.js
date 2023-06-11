const Competence = require("../ImACompetence");

class PremierSoins extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Premiers Soins");

  }
}

module.exports = PremierSoins;
