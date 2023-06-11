const Competence = require("../ImACompetence");

class Investigation extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("PER", 0);
    this.setName("Investigation");

  }
}

module.exports = Investigation;
