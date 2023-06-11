const Competence = require("../ImACompetence");

class Negociation extends Competence {
  constructor() {
    super();
    this.setCaracPpal("VOL",0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Negociation");

  }
}

module.exports = Negociation;
