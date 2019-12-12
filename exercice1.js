var nomVoiture = "Peugeot";
var x = 50;
var z = 5;
var w = 10;
var d = w + z;
var l =10;
var k = 5;
var resultat;
var prenom = "John", nom = "Doe", age = 35;
var demo = document.getElementById("demo");
var demoRetour = document.getElementById("demoRetour");
var boutton = document.getElementById("monBoutton").addEventListener("click", function () {
    //alert();
});

var changeSurOver= document.getElementById("changeSurOver").addEventListener("mouseover", function () {
    document.getElementById("changeSurOver").style.backgroundColor = "red";
});

var txt = "Une longue phrase";
var longueur = txt;
//alert(longueur);

var str1 = " Bonjour";
var str2 = " le monde";
//alert(str1 + str2);

var listeVoiture = ["Renault","Volvo","Citroen"];
var maVoiture = listeVoiture[1];

listeVoiture[0] = "ford";
//console.log(listeVoiture);
//alert(listeVoiture.length);
var retrait = listeVoiture.splice(2);
//console.log(listeVoiture);
var injection = listeVoiture.push("Ferrari");
//console.log(listeVoiture);

var rNumber = Math.random();
//console.log(rNumber);

var fNumber = 15.7;
resultat= Math.round(fNumber);
//console.log(resultat);

var nombreUn = 10;
var nombreDeux = 5;
var nombreTrois = 10;
var nombreQuatre = 10;
if (nombreUn>nombreDeux){
    //alert("NombreUn est supérieur à nombreDeux");
}

if (nombreTrois===nombreQuatre){
    //alert("nombreTrois est égal à nombreQuatre");
}

if (nombreUn != nombreDeux){
    //alert("nombreUn n'est pas égal à nombreDeux");
}

//demo.innerHTML="z vaux 5, w vaux 10, le résultat est :" + (z+w);

//alert(d);
//alert(w*z);
//alert (w/2);
//alert(15 % 9);
//l= k+10;
//alert(l);

function maFonction(){
    //alert("Salut tout le monde !");
}
maFonction();

function maFonctionDeRetour(){
    demoRetour.innerHTML= "Bonjour !";
}
//maFonctionDeRetour();

//for(i=0; i<10; i++){
   // console.log(i);
//}

//var fruits =["pomme","banane","poire"];
//for(i=0; i<fruits.length; i++){
   // console.log(i);
//}
var i = 0;
//while (i<10){
//    i++;
//    console.log(i);
//}

//while (i<10){
//    i+=2;
//    console.log(i);
//}
 for(i=0; i<11; i++){
     if(i===5){
         alert("Impeccable");
         console.log(i);
     }
 }