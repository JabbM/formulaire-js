
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
  function SelectHoraire()
        {
          if (document.getElementById('Horaire').value = "Après diner")
          {
              document.getElementById('Heure').style.display = 'block';
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
    Option1.setAttribute('value', 'Repas');
    Option1.setAttribute('value', 'Dessert');
    Option1.setAttribute('value', 'Après diner');
    var Select2 = document.createElement('select');
    Select2.setAttribute('id', 'horaire' + id)
    Select2.setAttribute('onchange', 'SelectHoraire()');
    var Option2 = document.createElement('option');
    Option2.setAttribute('value','22h00');
    Option2.setAttribute('value', '23h00');
    Option2.setAttribute('value', '00h00');
    Option2.setAttribute('value', '01h00');

    Conteneur.appendChild(ContainerSong);
    Select1.appendChild(Option1);
    Conteneur.appendChild(ContainerSong);
    ContainerSong.appendChild(Input1);
    ContainerSong.appendChild(Input2);
    Select1.appendChild(Option1);
    Select2.appendChild(Option2);
    ContainerSong.appendChild(Select1);
    ContainerSong.appendChild(Select2);
}

function Supprimer(){

  var div = document.getElementById('Conteneur');
  var enfant = document.getElementById('ContainerSong' + id);
  if(enfant){
      enfant.parentNode.removeChild(enfant);
  }
  console.log(id);

}
