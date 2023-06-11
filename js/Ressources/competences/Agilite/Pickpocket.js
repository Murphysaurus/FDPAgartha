const Competence = require("../ImACompetence");

class Pickpocket extends Competence {
  constructor() {
    super();
    this.setCaracPpal("AGI", 0);
    this.setCaracSecondary("REF", 0);
    this.setName("Pickpocket");

  }
}

module.exports = Pickpocket;
