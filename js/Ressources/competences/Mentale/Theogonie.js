const Competence = require("../ImACompetence");

class Theogonie extends Competence {
  constructor() {
    super();
    this.setCaracPpal("VOL",0);
    this.setCaracSecondary("OCC", 0);
    this.setName("Theogonie");

  }
}

module.exports = Theogonie;
