# <p align= "center "> **cours de java Script**>
![logo javaScript](img/JavaScript-Logo.png "javaScript")
## Introduction de java script

<p>JavaScript est un langage de programmation utilisé par les développeurs pour concevoir des sites web interactifs. Les fonctions JavaScript peuvent permettre d'améliorer l'expérience utilisateur d'un site web, de la mise à jour des flux de médias sociaux à l'affichage d'animations et de cartes interactives. En tant que langage de script côté client, c'est l'une des principales technologies du web. Lors de la navigation sur Internet, à tout moment vous pouvez par exemple voir un carrousel d'images, un menu déroulant « Cliquer pour afficher » ou le changement dynamique de la couleur des éléments d'une page web. Tout cela est possible grâce à JavaScript.</p>

```var maChaine=newString('exemple')```

``` var a= 42;```

```var b= 4.2;``` 

```var c= -42;```

```alert (" ma variable a:"+ typeof a +"\nmavow)```
```


 alert("ma variable a:"+ typeof (a) +
"\nma variable b est de type:"+ typeof(a) +
"\nma variable c est de type:" + typeof(b) +
"\nma variable d est de type:"+ typeof(c));

var maChaine = "exemple";
var maChaine =newString("exemple");

alert("ma variable maChaine est de type:" + typeof(maChaine) +
"\nma variable maChaine est de type:" + typeof(maChaine));
var n=null;
var u=undefined;
var nn =NaN;

alert("ma variable ma chaine est de type: " + typeof(n) +
"\n ma variable maChaine est de type : "+ typeof(u));
```
```
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

 y += //équivaut y = y + z 
      //renvoi 7
 y *= //équivaut y = y + z 
    //renvoi 14
 y -= //équivaut y = y + z 
 //renvoi 12
 y /= //équivaut y = y + z
 //renvoi 6
 y %= //équivaut y = y + z 
//renvoi 0
```
```
 <p presentation des types des operateurs> + , - , / , % ,</p>
 y += //équivaut y = y + z 
      //renvoi 7
 y *= //équivaut y = y * z 
    //renvoi 14
 y -= //équivaut y = y - z 
 //renvoi 12
 y /= //équivaut y = y / z
 //renvoi 6
 y %= //équivaut y = y % z 
//renvoi 0
```
|Opérateur Arythmétique  |  Définition                                                   |    
|:----------------------:|---------------------------------------------------------------|
|==                     |permet de tester l’égalité sur les valeurs                                                                                  |                                
|===                    |Permet de tester l’égalité en termes de valeurs et de types                                                                                    |          
|!=                     |Permet de tester la différence en valeurs                                                                                  |                           
|<>                     |Permet également de tester la différence en valeurs                                                                                  |                  
|!==                    |Permet de tester la différence en valeurs ou en types                                                                                    |                
|<                      |Permet de tester si une valeur est strictement inférieure à une autre|                                                                                   |
|>                      |Permet de tester si une valeur est strictement supérieure       àuneautre                                                                                |            
|<=                     |Permet de tester si une valeur est inférieure ou égale à une        autre                                                                                    |               
|>=                     |Permet de tester si une valeur est supérieure ou égale à une   | autre               



#<p align="center">** Les tableaux en JAVA SCRIPT**/p> 
|Fonction | Fonction plus résultat                             |
|:---------:|---------------------------------------------------------------|
         |var arrayNbr = [1, 2, 3];                           |
          |var arrayStr = ["a", "b", "c"]; arrayNbr.push(4); //|[1,2,3,4] ajoute la valeur indiqué à la fin dutableau|
          |arrayNbr.pop(); //[1, 2] retire la dernière valeur  |
          |arrayNbr.shift(); //[2, 3] retire la première valeur|
          |arrayNbr.unshift(0); //[0, 1, 2, 3] ajoute la valeur indiqué au début du tableau                          |
          |arrayStr.concat("d"); //fusionne des tableaux sans changer les valeurs du tableau initial               |
          |arrayStr.join('-'); // a-b-c joindre les valeurs     du | tableau sans changer les valeurs du tableau initial                                              |
          |arrayStr.slice(1); // ["b", "c"] retire le nombre    d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial          |
          |arrayStr.slice(-1); // ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial                                      |
          |arrayStr.includes("c"); //true vérifie si la valeur existe                                               |
          |arrayStr.indexOf("c"); //2 renvoi le position      (index) de la valeur dans le tableau                 |
          |arrayNbr.reduce((acc, cou)=> acc + cou ) //6 additionne tous les éléments du tableau              |
          |arrayNbr.find(el => el > 2) //3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition                                         |
          |arrayNbr.findIndex(el => el > 2) //2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition                                |
          |arrayNbr.map(el => el * 2); //[2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.                                            |
          |arrayNbr.some(el => el > 2); //true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.               |
          |arrayNbr.filter(el => el > 1) // [2,3] renvoi tous les éléments qui respectent la condition             |
          |arrayNbr.every(el => el > 1);                       |
        |arrayNbr.reverse();                                 |
