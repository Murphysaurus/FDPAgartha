class CharacterVoie {
  constructor() {
    this.VoieName = "";
    this.VoieLevel = 0;
  }

  UpVoie() {
    this.VoieLevel += 1;
  }

  DownVoie() {
    this.VoieLevel -= 1;
  }

  SetVoie(Name) {
    this.VoieName = Name;
  }
}

module.exports = CharacterVoie;
