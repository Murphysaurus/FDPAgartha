const Adaptation = require("./Adaptation");
const Agility = require("./Agility");
const Combat = require("./Combat");
const Intellectuelles = require("./Intellectuelles");
const Mentales = require("./Mentales");
const Physique = require("./Physique");

class allCompetences {
  constructor() {
    this.Adaptation = new Adaptation().getAllCompetences();
    this.Agility = new Agility().getAllCompetences();
    this.Combat = new Combat().getAllCompetences();
    this.Intellectuelles = new Intellectuelles().getAllCompetences();
    this.Mentales = new Mentales().getAllCompetences();
    this.Physique = new Physique().getAllCompetences();
  }

}

module.exports = allCompetences;
