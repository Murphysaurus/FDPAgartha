const Competence = require("../ImACompetence");

class Esquive extends Competence {
  constructor() {
    super();
    this.setCaracPpal("REF", 0);
    this.setCaracSecondary("AGI", 0);
    this.setName("Esquive");

  }
}

module.exports = Esquive;
