const Charme = require("./Adaptation/Charme");
const Orientation = require("./Adaptation/Orientation");
const Expression = require("./Adaptation/Expression");
const Pistage = require("./Adaptation/Pistage");
const Survie = require("./Adaptation/Survie");
const Tromperie = require("./Adaptation/Tromperie");

class Adaptation {
  constructor() {
    this.Charme = new Charme();
    this.Orientation = new Orientation();
    this.Pistage = new Pistage();
    this.Tromperie = new Tromperie();
    this.Expression = new Expression();
    this.Survie = new Survie();
  }

  getAllCompetences() {
    return ({
      "Charme": this.Charme,
      "Orientation": this.Orientation,
      "Pistage": this.Pistage,
      "Tromperie": this.Tromperie,
      "Expression": this.Expression,
      "Survie": this.Survie
    })
  }
}

module.exports = Adaptation;
