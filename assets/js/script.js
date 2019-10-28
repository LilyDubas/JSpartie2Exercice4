var button = document.querySelector('button'); //querySelector permet d'appeler des classes CSS
function resetForm(){
  var fields = document.querySelectorAll('input');
  for (let i=0; i<fields.length;i++){   //boucle for qui permet de récupérer les données dans un tableau
    fields[i].value='';                 //affiche les 'champs vides'
  }
}
button.onclick = function(){            //appelle la fonction
  resetForm()
};
