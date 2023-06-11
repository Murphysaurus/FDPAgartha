class CharacterSpe {
  constructor() {
    this.SpeName = "";
    this.SpeRank = 0;
  }

  SetName(Name) {
    this.SpeName = Name;
  }

  UpRank() {
    this.SpeRank +=1;
  }

  DownRank() {
    this.SpeRank -=1;
  }

}

module.exports = CharacterSpe;
