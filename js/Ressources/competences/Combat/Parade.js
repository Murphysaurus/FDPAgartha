const Competence = require("../ImACompetence");

class Parade extends Competence {
  constructor() {
    super();
    this.setCaracPpal("REF", 0);
    this.setCaracSecondary("PHY", 0);
    this.setName("Parade");

  }
}

module.exports = Parade;
