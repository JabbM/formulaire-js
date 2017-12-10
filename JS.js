
var elementPattern = /^element(\d+)$/
var deletePattern = /^delete(\d+)$/
var etat = document.getElementById('radio1');
var etat2 = document.getElementById('radio2');
var Form1 = document.getElementById('Form1');
var Form2 = document.getElementById('Form2');
var None = document.getElementById('None');

function verifRadio()
{

      if (etat.checked){
        Form1.style.display = 'none';
        None.style.display = 'block';
      }
      if (etat2.checked){
        Form1.style.display = 'none';
        document.getElementById('fin').style.display = 'block';
      }
}

function creation(){


    if (Form2.style.display = 'none') {
      Form2.style.display = 'block';
      None.style.display = 'none';

    }

}

function enregistrer()
        {
          if(document.getElementById('Form2').style.display = 'block')
          {
                document.getElementById('None').style.display = 'none';
                document.getElementById('Form2').style.display = 'none';
                document.getElementById('fin').style.display = 'block';

          }


}

var id = 1;
        function Ajouter()
        {

                var Conteneur = document.getElementById('Conteneur');

                if(Conteneur)
                {
                        creerElement();
                        id++;
                }
              return id;
        }

function creerElement()
{
  var Conteneur = document.getElementById('Conteneur')
  var ContainerSong = document.createElement('div');
    ContainerSong.setAttribute('id', 'ContainerSong' + id);
    var Input1 = document.createElement('input');
    Input1.setAttribute('type', 'text');
    Input1.setAttribute('name', 'input1-' + id);
    Input1.setAttribute('id', 'input1-' + id);

    var Input2 = document.createElement('input');
    Input2.setAttribute('type', 'text');
    Input2.setAttribute('name', 'input2-' + id);
    Input2.setAttribute('id', 'input2-' + id);

    var Select1 = document.createElement('select');
    Select1.setAttribute('id', 'horaire' + id)
    Select1.setAttribute('onchange', 'SelectHoraire()');

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
    Option4.setAttribute('value', 'Après diner');
    var Opt4 = document.createTextNode('Après diner');

    var Select2 = document.createElement('select');
    Select2.setAttribute('id', 'heure' + id)

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

    Conteneur.appendChild(ContainerSong);
    Select1.appendChild(Option1);
    Conteneur.appendChild(ContainerSong);
    ContainerSong.appendChild(Input1);
    ContainerSong.appendChild(Input2);
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
    ContainerSong.appendChild(Select1);
    ContainerSong.appendChild(Select2);
}

function SelectHoraire()
      {
        if (document.getElementById('Horaire' + id).value = "Après diner")
        {
            document.getElementById('Heure'+ id).style.display = 'block';
        }
      }

function Supprimer(){

  var div = document.getElementById('Conteneur');
  var enfant = document.getElementById('ContainerSong' + id);
  if(enfant){
      enfant.parentNode.removeChild(enfant);
  }
  console.log(id);

}
