const Croyance = require("./Intellectuelles/Croyance");
const Investigation = require("./Intellectuelles/Investigation");
const Langues = require("./Intellectuelles/Langues");
const LanguesOccultes = require("./Intellectuelles/LanguesOccultes");
const Medecine = require("./Intellectuelles/Medecine");
const PremierSoins = require("./Intellectuelles/PremierSoins");
const Chirurgie= require("./Intellectuelles/Chirurgie");
const Psychologie = require("./Intellectuelles/Psychologie");
const Sciences = require("./Intellectuelles/Sciences");

class Intellectuelles {
  constructor() {
    this.Croyance = new Croyance();
    this.Investigation = new Investigation();
    this.LanguesOccultes = new LanguesOccultes();
    this.PremierSoins = new PremierSoins();
    this.Langues = new Langues();
    this.Medecine = new Medecine();
    this.Chirurgie = new Chirurgie();
    this.Psychologie = new Psychologie();
    this.Sciences = new Sciences();
  }

  getAllCompetences() {
    return ({
      "Croyance": this.Croyance,
      "Investigation": this.Investigation,
      "LanguesOccultes": this.LanguesOccultes,
      "PremierSoins": this.PremierSoins,
      "Langues": this.Langues,
      "Medecine": this.Medecine,
      "Chirurgie": this.Chirurgie,
      "Psychologie": this.Psychologie,
      "Sciences": this.Sciences
    })
  }
}

module.exports = Intellectuelles;
