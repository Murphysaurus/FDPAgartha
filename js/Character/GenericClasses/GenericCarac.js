class GenericCarac {
  constructor() {
    this.principal = {
      "ADA": 1,
      "PHY": 1,
      "VOL": 1,
      "INT": 1,
      "AGI": 1,
    }
    this.secondary = {
      "CHA": 0,
      "RES": 0,
      "OCC": 0,
      "PER": 0,
      "REF": 0,
    }
  }

  setPrincipalCarac(carac, Value) {
    this.principal[carac] = Value;
  }

  setSecondaryCarac(carac, Value) {
    this.secondary[carac] = Value;
  }
}

module.exports = GenericCarac;
