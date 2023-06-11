const Competence = require("../ImACompetence");

class Acrobatie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("PHY",0);
    this.setCaracSecondary("REF", 0);
    this.setName("Acrobatie");

  }
}

module.exports = Acrobatie;
