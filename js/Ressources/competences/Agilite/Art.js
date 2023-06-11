const Competence = require("../ImACompetence");

class Art extends Competence {
  constructor() {
    super();
    this.setCaracPpal("AGI", 0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Art");

  }
}

module.exports = Art;
