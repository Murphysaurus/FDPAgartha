const Competence = require("../ImACompetence");

class Intimidation extends Competence {
  constructor() {
    super();
    this.setCaracPpal("PHY",0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Intimidation");

  }
}

module.exports = Intimidation;
