const Competence = require("../ImACompetence");

class Crochetage extends Competence {
  constructor() {
    super();
    this.setCaracPpal("AGI", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Crochetage");
    this.isUsable(false);
  }
}

module.exports = Crochetage;
