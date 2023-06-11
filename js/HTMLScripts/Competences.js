const Competences = require("../Ressources/competences/AllCompetences");

function loadCompetences () {
  let compTable = new Competences();
  compTable.Mentales.foreach(function (item){
    $('#compMentales').append('<tr><td>' +
      item.getName() +
      '</td></tr>')
  });
}
