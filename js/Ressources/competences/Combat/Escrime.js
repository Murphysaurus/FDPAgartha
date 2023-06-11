const Competence = require("../ImACompetence");

class Escrime extends Competence {
  constructor() {
    super();
    this.setCaracPpal("REF", 0);
    this.setCaracSecondary("PHY", 0);
    this.setName("Escrime");
    this.isUsable(false);
  }
}

module.exports = Escrime;
