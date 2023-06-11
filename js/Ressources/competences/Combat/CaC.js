const Competence = require("../ImACompetence");

class CaC extends Competence {
  constructor() {
    super();
    this.setCaracPpal("RES", 0);
    this.setCaracSecondary("AGI", 0);
    this.setName("Corps a Corps");

  }
}

module.exports = CaC;
