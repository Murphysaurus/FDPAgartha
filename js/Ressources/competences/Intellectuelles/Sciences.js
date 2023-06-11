const Competence = require("../ImACompetence");

class Sciences extends Competence {
  constructor() {
    super();
    this.setCaracPpal("INT", 0);
    this.setCaracSecondary("ADA", 0);
    this.setName("Sciences");

  }
}

module.exports = Sciences;
