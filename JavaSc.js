
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



        function Ajouter()
        {
                var ContainerSong = document.getElementById('ContainerSong');

                if(ContainerSong)
                {
                        ContainerSong.appendChild(creerElement(dernierElement() + 1))
                }
        }

        function dernierElement()
{
  var ContainerSong = document.getElementById('ContainerSong');
   var n = 0;
  if(ContainerSong)
  {
    var elementID;
    var elementNo;

    if(ContainerSong.childNodes.length > 0)
    {
      for(var i = 0; i < ContainerSong.childNodes.length; i++)
      {
        // Ici, on vérifie qu'on peut récupérer les attributs, si ce n'est pas possible, on renvoit false, sinon l'attribut
        elementID = (ContainerSong.childNodes[i].getAttribute) ? ContainerSong.childNodes[i].getAttribute('id') : false;
        if(elementID)
        {
          elementNo = parseInt(elementID.replace(elementPattern, '$1'));
          if(!isNaN(elementNo) && elementNo > n)
          {
            n = elementNo;
          }
        }
      }
    }
  }
  return n;
}

function creerElement(ID)
{
  var ContainerSong = document.createElement('div');
    ContainerSong.setAttribute('id', 'conteneur' + ID);
    var Input1 = document.createElement('input');
    Input1.setAttribute('type', 'text');
    Input1.setAttribute('name', 'input1-' + ID);
    Input1.setAttribute('id', 'input1-' + ID);
    var Input2 = document.createElement('input');
    Input2.setAttribute('type', 'text');
    Input2.setAttribute('name', 'input2-' + ID);
    Input2.setAttribute('id', 'input2-' + ID);
    var Delete = document.createElement('input');
    Delete.setAttribute('type', 'button');
    Delete.setAttribute('value', 'Supprimer');
    Delete.setAttribute('id', 'delete' + ID);
    Delete.onclick = Supprimer;
    ContainerSong.appendChild(Input1);
    ContainerSong.appendChild(Input2);
    ContainerSong.appendChild(Delete);
    return ContainerSong;
}

function Supprimer()
{
  var ContainerSong = document.getElementById('ContainerSong');
  var n = parseInt(this.id.replace(deletePattern, '$1'));

  if(ContainerSong && !isNaN(n))
  {
    var elementID;
    var elementNo;
    if(ContainerSong.childNodes.length > 0)
    {
      for(var i = 0; i < ContainerSong.childNodes.length; i++)
      {
        elementID = (ContainerSong.childNodes[i].getAttribute) ? ContainerSong.childNodes[i].getAttribute('id') : false;
        if(elementID)
        {
          elementNo = parseInt(elementID.replace(elementPattern, '$1'));
          if(!isNaN(elementNo) && elementNo  == n)
          {
            ContainerSong.removeChild(ContainerSong.childNodes[i]);
            return;
          }
        }
      }
    }
  }
}
