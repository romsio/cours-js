console.log("aller ogcn");
const prenom="romain";
const nom="cilia";
const age = 37;
const phrase= "bonjour je m'appelle " + prenom + " " + nom + "  et j'ai "  + age + "ans";

//alert(phrase);

/*const date=Date.now()
const Date=new Date;
console.log(typeof Date);
const montableau=['toto','tati','tutu'];
console.log(typeof montableau);

var varTable=new Array();
varTable['toto']=1;
varTable['tati']=2;
varTable['tutu']=3;

const monTableau=[];
monTableau['enfant']=1;
monTableau['maman']=2;
monTableau['papa']=3;*/

var a=42;
var b=4.2;
var c=-42;
var d="42";

alert("ma variable a:"+ typeof (a) +
"\nma variable b est de type:"+ typeof(b) +
"\nma variable c est de type:" + typeof(c) +
"\nma variable d est de type:"+ typeof(d));

var maChaine = "exemple";
var maChaine =new String("exemple");

alert("ma variable maChaine est de type:" + typeof(maChaine) +
"\nma variable maChaine est de type:" + typeof(maChaine));

var n=null;
var u=undefined;
var nn =NaN;

alert("ma variable ma chaine est de type: " + typeof(n) +
"\nma variable   est de type : "+ typeof(u));

var x=32;
var y=5;
var z=2;

alert(y*z)
alert(y/z)
alert(X%y)

alert((y+z)*x)
alert(y)
y=y+z
// y+=z
alert(y)


var heureOuverture =9;
var heureFermeture =17;
var heureAtuelle=8;

if  (heureActuelle < heureOuverture){
alert("il est trop tôt pas encore ouvert");
}
else if(heureAtuelle >= heureOuverture && heureAtuelle<heureFermeture){
    alert("bienvenue");
    if(heureAtuelle <12)
}
else {
alert("revenez demain");
}
