const Art = require("./Agilite/Art");
const Bricolage = require("./Agilite/Bricolage");
const Crochetage = require("./Agilite/Crochetage");
const Discretion = require("./Agilite/Discretion");
const Pickpocket = require("./Agilite/Pickpocket");


class Agility {
  constructor() {
    this.Art = new Art();
    this.Bricolage = new Bricolage();
    this.Crochetage = new Crochetage();
    this.Discretion = new Discretion();
    this.Pickpocket = new Pickpocket();
  }

  getAllCompetences() {
    return ({
      "Art": this.Art,
      "Bricolage": this.Bricolage,
      "Crochetage": this.Crochetage,
      "Discretion": this.Discretion,
      "Pickpocket": this.Pickpocket
    })
  }
}

module.exports = Agility;
