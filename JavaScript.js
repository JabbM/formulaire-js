
var etat = document.getElementById('radio1');
var etat2 = document.getElementById('radio2');
var Form1 = document.getElementById('Form1');
var Form2 = document.getElementById('Form2');
var None = document.getElementById('None');

function verifRadio(){ //verification de quelle radio coché
  var prenom = document.getElementById('prenom').value;
  var nom = document.getElementById('nom').value;

  if (etat.checked){
    Form1.style.display = 'none';
    None.style.display = 'block';
  }
  if (etat2.checked){
    Form1.style.display = 'none';
    document.getElementById('fin').style.display = 'block';
    console.log(prenom+' '+nom+' ne participera pas à la soirée');
  }

}

function creation(){ //création d'une playlist
  if (Form2.style.display = 'none') {
    Form2.style.display = 'block';
    None.style.display = 'none';
  }

}

function enregistrer(){ //bouton enregistrer + affichage dans la console
  var prenom = document.getElementById('prenom').value;
  var nom = document.getElementById('nom').value;
  var creationn = document.getElementById('créer').value;
  var artiste = document.getElementById('Artiste').value;
  var titre = document.getElementById('Titre').value;
  var horaire = document.getElementById('Hhoraire').value;
  var heure = document.getElementById('Heure').value;

  if(document.getElementById('Form2').style.display = 'block'){
    document.getElementById('None').style.display = 'none';
    document.getElementById('Form2').style.display = 'none';
    document.getElementById('fin').style.display = 'block';
}
  if (etat) {
    console.log(prenom+' '+nom+' participera à la soirée');
  }
  if (creationn) {
    console.log(prenom+' '+nom+' nous aide pour la musique');
    console.log(artiste+'-'+titre+' durant '+horaire+' à '+heure);
  }
}

function  enregistrer2(){ //bouton enregistrer 2eme option
  var prenom = document.getElementById('prenom').value;
  var nom = document.getElementById('nom').value;

  if(document.getElementById('Form2').style.display = 'block'){
    document.getElementById('None').style.display = 'none';
    document.getElementById('Form2').style.display = 'none';
        document.getElementById('fin').style.display = 'block';
  }
  console.log(prenom+' '+nom+' ne nous aidera pas pour la musique');
}

var id = 1;
  function Ajouter(){ //bouton ajouter avec appel de la fonction creerElement
    var Conteneur = document.getElementById('Conteneur');

    if(Conteneur){
      creerElement();
      id++;
    }
    return id;
}

function creerElement(){//création d'elements html
  var Conteneur = document.getElementById('Conteneur')
  var ContainerSong = document.createElement('div');
  ContainerSong.setAttribute('id', 'ContainerSong' + id); //ajouts d'attributs aux balises
  ContainerSong.setAttribute('class', 'formCentrage');

  var form = document.createElement('form');
  form.setAttribute('class', 'formulaire');

  var contform = document.createElement('div');
  contform.setAttribute('class', 'ArtisteTitre');

  var cont1 = document.createElement('div');

  var Label1 = document.createElement('label');
  Label1.setAttribute('for', 'input1-' + id);
  var lab1 = document.createTextNode('Artiste');

  var br = document.createElement('br');

  var Input1 = document.createElement('input');
  Input1.setAttribute('type', 'text');
  Input1.setAttribute('name', 'input1-' + id);
  Input1.setAttribute('id', 'input1-' + id);

  var cont2 = document.createElement('div');

  var Label2 = document.createElement('label');
  Label2.setAttribute('for', 'input2-' + id);
  var lab2 = document.createTextNode('Titre');

  var br2 = document.createElement('br');

  var Input2 = document.createElement('input');
  Input2.setAttribute('type', 'text');
  Input2.setAttribute('name', 'input2-' + id);
  Input2.setAttribute('id', 'input2-' + id);

  var contcont = document.createElement('div');
  contcont.setAttribute('class', 'choixHoraire');

  var contselect1 = document.createElement('div');
  contselect1.setAttribute('class', 'lesHoraires');

  var Select1 = document.createElement('select');
  Select1.setAttribute('id', 'horaire' + id)
  Select1.setAttribute('onchange', 'SelectHoraire2()');

  var Option1 = document.createElement('option');
  Option1.setAttribute('value', 'Apéro');
  var Opt1 = document.createTextNode('Apéro');

  var Option2 = document.createElement('option');
  Option2.setAttribute('value', 'Repas');
  var Opt2 = document.createTextNode('Repas');

  var Option3 = document.createElement('option');
  Option3.setAttribute('value', 'Dessert');
  var Opt3 = document.createTextNode('Dessert');

  var Option4 = document.createElement('option');
  Option4.setAttribute('value', 'Soirée');
  var Opt4 = document.createTextNode('Soirée');

  var contselect2 = document.createElement('div');
  contselect2.setAttribute('class', 'lesHeures');

  var Select2 = document.createElement('select');
  Select2.setAttribute('id', 'heure' + id)
  Select2.setAttribute('class', 'invisible');

  var Optionn1 = document.createElement('option');
  Optionn1.setAttribute('value','22h00');
  var Optt1 = document.createTextNode('22h00');

  var Optionn2 = document.createElement('option');
  Optionn2.setAttribute('value', '23h00');
  var Optt2 = document.createTextNode('23h00');

  var Optionn3 = document.createElement('option');
  Optionn3.setAttribute('value', '00h00');
  var Optt3 = document.createTextNode('00h00');

  var Optionn4 = document.createElement('option');
  Optionn4.setAttribute('value', '01h00');
  var Optt4 = document.createTextNode('01h00');

  var Optionn5 = document.createElement('option');
  Optionn5.setAttribute('value', '02h00');
  var Optt5 = document.createTextNode('02h00');

  var Optionn6 = document.createElement('option');
  Optionn6.setAttribute('value', '03h00');
  var Optt6 = document.createTextNode('03h00');

  var Optionn7 = document.createElement('option');
  Optionn7.setAttribute('value', '04h00');
  var Optt7 = document.createTextNode('04h00');

  var Optionn8 = document.createElement('option');
  Optionn8.setAttribute('value', '05h00');
  var Optt8 = document.createTextNode('05h00');

  Conteneur.appendChild(ContainerSong); //attribution des parents
  ContainerSong.appendChild(form);
  form.appendChild(contform);
  contform.appendChild(cont1);
  contform.appendChild(cont2);
  cont1.appendChild(Label1);
  cont1.appendChild(lab1);
  cont1.appendChild(br);
  cont1.appendChild(Input1);
  cont2.appendChild(Label2);
  cont2.appendChild(lab2);
  cont2.appendChild(br2);
  cont2.appendChild(Input2);
  ContainerSong.appendChild(contcont);
  contcont.appendChild(contselect1);
  contcont.appendChild(contselect2);
  contselect1.appendChild(Select1);
  contselect2.appendChild(Select2);
  Select1.appendChild(Option1);
  Select1.appendChild(Option2);
  Select1.appendChild(Option3);
  Select1.appendChild(Option4);
  Option1.appendChild(Opt1);
  Option2.appendChild(Opt2);
  Option3.appendChild(Opt3);
  Option4.appendChild(Opt4);
  Select2.appendChild(Optionn1);
  Select2.appendChild(Optionn2);
  Select2.appendChild(Optionn3);
  Select2.appendChild(Optionn4);
  Select2.appendChild(Optionn5);
  Select2.appendChild(Optionn6);
  Select2.appendChild(Optionn7);
  Select2.appendChild(Optionn8);
  Optionn1.appendChild(Optt1);
  Optionn2.appendChild(Optt2);
  Optionn3.appendChild(Optt3);
  Optionn4.appendChild(Optt4);
  Optionn5.appendChild(Optt5);
  Optionn6.appendChild(Optt6);
  Optionn7.appendChild(Optt7);
  Optionn8.appendChild(Optt8);
}

function SelectHoraire(){ //option si Soirée est selectionné
    if (document.getElementById('Hhoraire').value == "Soirée"){
      document.getElementById('Heure').style.display = 'block';
    }
    else {
      document.getElementById('Heure').style.display = 'none';
    }
}

function SelectHoraire2(){//Tentative pour les select créé
  if (document.getElementById('horaire'+id).value == "Soirée"){
    document.getElementById('heure').style.display = 'block';
  }
  else {
    document.getElementById('heure').style.display = 'none';
  }
}

function Supprimer(){// Tentative de suppression de la dernière div créé
  var div = document.getElementById('Conteneur');
  var enfant = document.getElementById('ContainerSong' + id);

  if(enfant){
    div.removeChild(enfant);
  }
  console.log(id);
}
