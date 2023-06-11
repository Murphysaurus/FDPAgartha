const Negociation = require("./Mentale/Negociation");
const Pouvoir = require("./Mentale/Pouvoir");
const Resilience = require("./Mentale/Resilience");
const Theogonie = require("./Mentale/Theogonie");

class Mentales {
  constructor() {
    this.Negociation = new Negociation();
    this.Pouvoir = new Pouvoir();
    this.Resilience = new Resilience();
    this.Theogonie = new Theogonie();
  }

  getAllCompetences() {
    return({
      "Negociation": this.Negociation,
      "Pouvoir": this.Pouvoir,
      "Resilience": this.Resilience,
      "Theogonie": this.Theogonie
    });
  }
}

module.exports = Mentales;
