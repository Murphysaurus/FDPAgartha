const Competence = require("../ImACompetence");

class Resilience extends Competence {
  constructor() {
    super();
    this.setCaracPpal("VOL",0);
    this.setCaracSecondary("RES", 0);
    this.setName("Resilience");

  }
}

module.exports = Resilience;
