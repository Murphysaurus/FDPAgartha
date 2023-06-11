const Competence = require("../ImACompetence");

class Bricolage extends Competence {
  constructor() {
    super();
    this.setCaracPpal("AGI", 0);
    this.setCaracSecondary("INT", 0);
    this.setName("Bricolage");

  }
}

module.exports = Bricolage;
