class competence {
  constuctor() {
    this.caracPpal = {
      "name": "",
      "value": 0
    };
    this.caracSecondary = {
      "name": "",
      "value": 0
    };
    this.value = 0;
    this.name= "";
    this.isUsable = true;
  }

  setIsUsable(value) {
    this.isUsable = value;
  }

  setCaracPpal(Name, Value) {
    this.caracPpal.name = Name;
    this.caracPpal.value = Value;
  }

  setCaracSecondary(Name, Value) {
    this.caracSecondary.name = Name;
    this.caracSecondary.value = Value;
  }

  setCaracValue(Principal, Secondary) {
    this.caracPpal.value = Principal;
    this.caracSecondary.value = Secondary;
  }

  setValue(value) {
    this.value = value;
  }

  setName(value) {
    this.name = value;
  }

  addToValue(value) {
    this.isUsable = value > 0;
    this.value += value;
  }

  getRollInformation() {
    return ({
      "dices": this.caracPpal.value + this.caracSecondary.value,
      "value": this.value,
      "usable": this.isUsable,
    });
  }

  getCaracPpal() {
    return (this.caracPpal.name);
  }

  getCaracSecondary() {
    return (this.caracSecondary.name);
  }

  getName() {
    return (this.name);
  }
}

module.exports = competence;
