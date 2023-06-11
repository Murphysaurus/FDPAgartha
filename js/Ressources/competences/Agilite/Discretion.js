const Competence = require("../ImACompetence");

class Discretion extends Competence {
  constructor() {
    super();
    this.setCaracPpal("AGI", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Discretion");

  }
}

module.exports = Discretion;
