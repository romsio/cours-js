

//creation d'un bouton

const body = document.getElementsByTagName('body');
console.log (body[0])
function getRandomint(){
    return Math.floor(Math.random()*256);
}
function getbodyBg(){
    body[0].style.backgroundColor='rgb('+getRandomint()+','
    +getRandomint() +','+getRandomint()+')';
}
var btn=document.getElementById('btn')

btn.addEventListener('click',getbodyBg);

const idImg=document.querySelector('#img')
console.log(img)
img.setattribute('src',img