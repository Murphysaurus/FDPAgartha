const Initiative = require("./Combat/Initiative");
const CaC = require("./Combat/CaC");
const Esquive = require("./Combat/Esquive");
const Escrime = require("./Combat/Escrime");
const Parade = require("./Combat/Parade");
const Tir = require("./Combat/Tir");

class Combat {
  constructor() {
    this.Initiative = new Initiative();
    this.CaC = new CaC();
    this.Escrime = new Escrime();
    this.Tir = new Tir();
    this.Esquive = new Esquive();
    this.Parade = new Parade();
  }

  getAllCompetences() {
    return ({
      "Initiative": this.Initiative,
      "CaC": this.CaC,
      "Escrime": this.Escrime,
      "Tir": this.Tir,
      "Esquive": this.Esquive,
      "Parade": this.Parade
    })
  }
}

module.exports = Combat;
