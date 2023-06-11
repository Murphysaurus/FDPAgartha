const Competence = require("../ImACompetence");

class Tromperie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Tromperie");

  }
}

module.exports = Tromperie;
