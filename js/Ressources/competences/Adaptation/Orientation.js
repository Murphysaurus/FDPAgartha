const Competence = require("../ImACompetence");

class Orientation extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("PER", 0);
    this.setName("Orientation");

  }
}

module.exports = Orientation;
