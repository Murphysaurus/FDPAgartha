class CharacterMetier {
  constructor() {
    this.CategorieMetier = "";
    this.Metier = "";
  }

  SetCategorie(Name) {
    this.CategorieMetier = Name;
  }

  SetMetier(Name) {
    this.Metier = Name;
  }
}

module.exports = CharacterMetier;
