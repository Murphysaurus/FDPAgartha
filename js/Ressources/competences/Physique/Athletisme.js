const Competence = require("../ImACompetence");

class Athletisme extends Competence {
  constructor() {
    super();
    this.setCaracPpal("PHY",0);
    this.setCaracSecondary("RES", 0);
    this.setName("Athletisme");

  }
}

module.exports = Athletisme;
