const Competence = require("../ImACompetence");

class Pouvoir extends Competence {
  constructor() {
    super();
    this.setCaracPpal("VOL",0);
    this.setCaracSecondary("OCC", 0);
    this.setName("Pouvoir");
    this.isUsable(false);
  }
}

module.exports = Pouvoir;
