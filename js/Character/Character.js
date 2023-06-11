const Voie = require("./GenericClasses/GenericVoie");
const Spe = require("./GenericClasses/GenericSpe");
const Metier = require("js/Character/GenericClasses/GenericMetier");
const Carac = require("js/Character/GenericClasses/GenericCarac");
const DamageState = require("js/Character/GenericClasses/GenericDamageValue");
const Competences = require("../Ressources/competences/AllCompetences");

class Character {
  constructor() {
    this.Voie = {
      "Voie1": new Voie(),
      "Voie2": new Voie(),
    }
    this.Spe = new Spe();
    this.Metier = new Metier();
    this.information = {
      "name": "",
      "Age": "",
      "Poids": "",
      "taille": "",
      "pres": "",
    };
    this.player = "";
    this.distinction = "";
    this.xp = 0;
    this.carac = new Carac();
    this.damageState = new DamageState();
    this.AdvantageList = [];
    this.WeaknessList = [];
    this.competences = new Competences();
  }
}
