const Competence = require("../ImACompetence");

class Vigueur extends Competence {
  constructor() {
    super();
    this.setCaracPpal("PHY",0);
    this.setCaracSecondary("VOL", 0);
    this.setName("Vigueur");

  }
}

module.exports = Vigueur;
