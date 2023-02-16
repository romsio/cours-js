/*console.log("aller ogcn");
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
monTableau['papa']=3;

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
}
    if(heureAtuelle <12){
alert("")
    }

else  {
alert("revenez demain");
}

    var note=5;
    var noteAmericaine="";

    if(note>19){

    }

   
else if(note>=18 && noteAmericaine <=19){
    alert("A")
}
else if(note>=18 && noteAmericaine <=19){
    alert("A")
}
else if(note>=15 && noteAmericaine<=17){
    alert("B")
}
else if(note>=12 && noteAmericaine<=14){
    alert("C")
}
else if(note>=9 && noteAmericaine<=14){
    alert("D")
}
else if(note>=6 && noteAmericaine<=19){
    alert("E")
}
else if(note>=15 && noteAmericaine<=19){
    alert("F")
}
else if(note>=0 && noteAmericaine<=19){
    alert("")
}


switch(noteAmericaine){
    case "A+": 
        alert("ExCELLENT travail")
        break;

    case 18:
        alert("TB")
        break;

    case 15:
    alert("B")
    break;

    case 12:
    alert("correct")    
    break;
    
    case 9:
    alert("moyen")
    break;
    
    case 6:
        alert("insuffisant")
        break;

    case 0:
        alert("Null")    
        }
     
var facture=1000;
var reduction=0;

if(facture<=2500 && facture>=1000){
    reduction=0;
}

else if(facture<=2500 && facture>=1000){
    reduction=10;
}
var total= facture-((reduction/100)*facture);

switch(reduction){
    case 0:
        console.log("autre,facture");
        break;
        default:
            console.log("total:",total)
            break;
}

var ArrayNbr=[1,2,3];
 array.push() ajoute une valeur a la fin de notre tableau 
 arrayNbr.push(4);//[1,2,3,4]
 Array.pop() retire la dernière valeur indiqué de notre tableau
arrayNbr.pop();//[1,2,3]
console.table(ArrayNbr)
arrray.unshift() 
array.unshift(0);//[0,1,2,3]ajoute la valeur indiqué
arrayStr.concat("d");// fusionne des tableaux sans changer les valeurs du tableau initial
arrayStr.joint('-');//a-b-c joindre les valeurs sans changer les du tableau
arrayStr.slice(-1);//["a","b"] retire le nombre d'
console.log(arrayCopy);//console.table(arrayNbr)

const div =document.getElementsByClassName('carre')
constarrDiv =Array.from(div)

//console.log(div);
arrDiv.map(el =>console.log(el))

arrDiv((element,index)=>index % 2 != 0 ? console.log('rouge') : console.log('vert'))


//div[].style.backgroundColor='rgb(255,0,0)';
//div[].style.backgroundColor='rgb(255,0,0)';
//div[].style.backgroundColor='rgb(255,0,0)';
//div[].style.backgroundColor='rgb(255,0,0)';
//div[].style.backgroundColor='rgb(255,0,0)';

//for(let index=0;index<div.length;index++){
// if (index % 2 !=0){
//      div[index].style.backgroundColor='rgb(255,0,0)'
//  }
//  else{
    div[index].style.backgroundColor='rgb(255,0,0)'
}

arrDiv((element,index)=>index % 2 != 0 ? console.log('rouge') : console.log('vert'))

/ div[0].style.backgroundColor = 'rgb(255, 0, 0)';
// div[1].style.backgroundColor = 'rgb(0, 255, 0)';
// div[2].style.backgroundColor = 'rgb(255, 0, 0)';
// div[3].style.backgroundColor = 'rgb(0, 255, 0)';
// div[4].style.backgroundColor = 'rgb(255, 0, 0)';
12 h 06
Boucle for:
12 h 06
// for (let index = 0; index < div.length; index++) {
//   if (index % 2 != 0) {
//     div[index].style.backgroundColor = 'rgb(255, 0, 0)'
//   } else {
//     div[index].style.backgroundColor = 'rgb(0, 255, 0)'
//   }
// }

methode map:

// div.map((element, index) => {
//   if(index % 2 != 0){
//     element.style.backgroundColor = 'rgb(255, 0, 0)'
//   } else {
//     element.style.backgroundColor = 'rgb(0, 255, 0)'
//   }
// })

// div.map((element, index) => index % 2 != 0
//    ?
//   element.style.backgroundColor = 'rgb(255, 0, 0)'
//    :
//   element.style.backgroundColor = 'rgb(0, 255, 0)'
// )// div.map((element, index) => {
//   if(index % 2 != 0){
//     return element.style.backgroundColor = 'rgb(255, 0, 0)'
//   }
//   return element.style.backgroundColor = 'rgb(0, 255, 0)'
// })



function getRandom(){
return Math.floor
}