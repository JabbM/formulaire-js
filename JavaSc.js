
function verif ()
        {
            var etat = document.getElementById('radio1').checked;
                etat2 = document.getElementById('radio2').checked = false;
                etat3 = document.getElementById('radio1').checked = false;

            if(etat)
            {

                document.getElementById('Form1').style.display = 'none';
                document.getElementById('newTitle').style.display = 'block';
                document.getElementById('Form2').style.display = 'block';
                document.getElementById('créer').style.display = 'none';

            }
            else
            {

                document.getElementById('Form2').style.display = 'none';
            }
            if ((etat3) && (etat2))
            {
              window.alert("Aucun choix de présence n'a été coché");
            }

        }

function enregistrer ()
        {
          if(document.getElementById('None').style.display = 'block')
          {
                document.getElementById('None').style.display = 'none';
                document.getElementById('Form2').style.display = 'none';
                document.getElementById('fin').style.display = 'block';

          }
        }
 function SelectHorraire ()
        {
          if (document.getElementById('Horraire').value = "Après diner")
          {
              document.getElementById('Heure').style.display = "block";
          }
        }

  function Ajouter(idclone) {

      var i = 0;
          clone = document.getElementById('Song').cloneNode(true); /*Je clone #Song*/
          copy = [];
          copy =  document.Song.Artiste.value; /*je copie ce qu'il y a dans value de #Artiste*/
          copy2 = [];
          copy2 = document.Song.Titre.value;/* "   "  "   "  "  " #Titre*/
          cloneArtiste = "Artiste" + i;
          cloneTitre = "Titre" + i;
          nameclone = "name" + i;
          idclone = "copie" + i;
      clone.Artiste.name = cloneArtiste;
      clone.id = idclone;
      clone.name = nameclone;
      clone.style = "margin-left: 320px";
      document.getElementById("stock").appendChild (clone); /*je fou le clone dans la div #stock*/
      document.nameclone.cloneArtiste.value = copy;/*Je colle dans la value de Artiste qui est dans #Artiste + 1 (essaie) */
      document.nameclone.cloneTitre.value = copy2; /* pareil mais dans Titre*/
      i++;
      return (idclone);
    }

  function Supprimer (){
    var element = document.getElementById(idclone); /*censé récupérer l'id de l'élément a supprimer*/
    element.parentNode.removeChild(element); /*censé supprimer l'élément par rapport a son parent*/
  }
