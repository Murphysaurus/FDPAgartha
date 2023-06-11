const Competence = require("../ImACompetence");

class Tir extends Competence {
  constructor() {
    super();
    this.setCaracPpal("PER", 0);
    this.setCaracSecondary("AGI", 0);
    this.setName("Tir");

  }
}

module.exports = Tir;
