const Competence = require("../ImACompetence");

class Croyance extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("OCC", 0);
    this.setName("Croyance");

  }
}

module.exports = Croyance;
