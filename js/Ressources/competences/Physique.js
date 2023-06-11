const Acrobatie = require("./Physique/Acrobatie");
const Athletisme = require("./Physique/Athletisme");
const Intimidation = require("./Physique/Intimidation");
const Vigueur = require("./Physique/Vigueur");

class Physique {
  constructor() {
    this.Acrobatie = new Acrobatie();
    this.Athletisme= new Athletisme();
    this.Intimidation = new Intimidation();
    this.Vigueur = new Vigueur();
  }

  getAllCompetences() {
    return ({
      "Acrobatie": this.Acrobatie,
      "Athletisme": this.Athletisme,
      "Intimidation": this.Intimidation,
      "Vigueur": this.Vigueur
    });
  }
}

module.exports = Physique;
