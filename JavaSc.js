var etat = document.getElementById('radio1');
    etat2 = document.getElementById('radio2');
    Form1 = document.getElementById('Form1');
    Form2 = document.getElementById('Form2');
    None = document.getElementById('None');

function verifRadio ()
{

      if (etat.checked) {
        Form1.style.display = 'none';
        None.style.display = 'block';
      }
      if (etat2.checked){
        Form1.style.display = 'none';
        document.getElementById('fin').style.display = 'block';
      }

}

function création(){


    if (Form2.style.display = 'none') {
      Form2.style.display = 'block';
      None.style.display = 'none';

    }

}

function enregistrer ()
        {
          if(document.getElementById('Form2').style.display = 'block')
          {
                document.getElementById('Form2').style.display = 'none';
                document.getElementById('fin').style.display = 'block';

          }
        }
 function SelectHoraire ()
        {
          if (document.getElementById('Horaire').value = "Après diner")
          {
              document.getElementById('Heure').style.display = "block";
          }
        }
