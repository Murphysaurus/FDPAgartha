const Competence = require("../ImACompetence");

class LanguesOccultes extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("OCC", 0);
    this.setName("Langues Occultes");

    this.isUsable(false);
  }
}

module.exports = LanguesOccultes;
