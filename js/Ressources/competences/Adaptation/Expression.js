const Competence = require("../ImACompetence");

class Expression extends Competence {
  constructor() {
    super();
    this.setCaracPpal("ADA", 0);
    this.setCaracSecondary("CHA", 0);
    this.setName("Expression");

  }
}

module.exports = Expression;
