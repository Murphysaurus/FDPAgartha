const Competence = require("../ImACompetence");

class Initiative extends Competence {
  constructor() {
    super();
    this.setCaracPpal("REF",0);
    this.setCaracSecondary("AGI", 0);
    this.setName("Initiative");

  }
}

module.exports = Initiative;
