// recupération des paramètres passés dans l'URL
var parameters = location.search.substring(1).split("&");
// visualisation des listes de paramètres
console.log(parameters);
// création d'une variable type chaine de caractère
var dico = {};
// Itération sur la liste de paramètres type chaine de caractère
for (var x in parameters)
{
    // création pour chaque parametre, d'une liste temp parametre, valeur
    var temp = parameters[x].split("=");
    // récupération du nom du parametre
    param= unescape(temp[0]);
    // récupération de la valeur et correction de typage 
    valeur = unescape(temp[1]);
    valeur = valeur.replaceAll("+", " ");
    // incorporation du parametre et de sa valeur dans le dictionnaire
    dico[param] = valeur;
    
}

// visualisation du dictionnaire contenant les données récupérées dans la console
console.log(dico);

// utilisation des données qui remplacent ici le code html des balises désignées par leur id
document.getElementById("artiste").innerHTML = dico.artiste;
document.getElementById("nom").innerHTML = dico.nom;
document.getElementById("pn").innerHTML = dico.pn;
document.getElementById("dn").innerHTML = dico.dn;
document.getElementById("np").innerHTML = dico.np;
document.getElementById("place").innerHTML = dico.place;
