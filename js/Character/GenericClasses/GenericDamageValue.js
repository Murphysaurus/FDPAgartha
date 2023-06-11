class GenericDamageValue {
  constructor() {
    this.DamageState = {
      "Minime": 0,
      "Legere": 0,
      "Grave": 0,
      "A terre": 0,
  };
    this.isDead = false;
    this.damageCap = [0, 0, 0, 0];
    this.maximalDamageType = {
      "Minime": 2,
      "Legere": 2,
      "Grave": 2,
      "A terre": 2,
    };
  }

  setDamageCap(Value) {
    this.damageCap = [
      Value,
      Value * 2,
      Value * 4,
      Value * 8,
    ]
  }

  setIsDead (Value) {
    this.isDead = Value;
  }

  setMaximalDamageType(Damage, Value) {
    this.maximalDamageType[Damage] = Value;
  }

  takeDamage(Value) {
    if (Value >= this.damageCap[3]) {
      this.setIsDead(true);
    } else if (Value < this.damageCap[3] && Value >= this.damageCap[2]) {
      this.setDamageState("A terre");
    } else if (Value < this.damageCap[2] && Value >= this.damageCap[1]) {
      this.setDamageState("Grave");
    } else if (Value < this.damageCap[1] && Value >= this.damageCap[1]) {
      this.setDamageState("Legere");
    } else {
      this.setDamageState("Minime");
    }
    this.upDateDamageState();
  }

  setDamageState(Damage) {
    this.DamageState[Damage]++;
  }
  upDateDamageState() {
    if (this.DamageState["Minime"] === this.damageCap["Minime"]) {
      this.DamageState["Minime"] = 0;
      this.DamageState["Legere"] += 1;
    }
    if (this.DamageState["Legere"] === this.damageCap["Legere"]) {
      this.DamageState["Legere"] = 0;
      this.DamageState["Grave"] += 1;
    }
    if (this.DamageState["Grave"] === this.damageCap["Grave"]) {
      this.DamageState["Grave"] = 0;
      this.DamageState["A terre"] += 1;
    }
    if (this.DamageState["A terre"] === this.damageCap["A terre"]) {
      this.DamageState["A terre"] = 0;
      this.setIsDead(true);
    }
  }
}


module.exports = GenericDamageValue;
