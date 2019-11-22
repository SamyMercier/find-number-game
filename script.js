const ul=document.getElementById("list");
var hasard=0;
var indicateur=document.getElementById("indicator");
var compteur=0;
var list=document.getElementsByTagName("li");


document.getElementById("button-start").addEventListener("click",function () {
    document.getElementById("start-menu").style.display="none";
    document.getElementById("champ1").style.display="block";
    document.getElementById("button-validate").style.display="block";
    document.getElementById("playingarea").style.display="block";
    document.getElementById("indicator").innerText="";
    document.getElementById("texte").style.display="none";
    while(ul.firstChild){
        ul.removeChild(ul.lastChild);
    }
    hasard=Math.floor(Math.random()*99);
    console.log(hasard);
    compteur=0;
});


document.getElementById("button-validate").addEventListener("click",function () {

    document.getElementById("texte").style.display="block";
    var champ=document.getElementById("entry").value;
    if(champ==""){
        alert("No number proposed")
    }
    else if(champ==hasard){
        indicateur.innerText="You found the hidden number "+hasard+" !";
        indicateur.style.color="red";
        document.getElementById("button-replay").style.display="block";
        document.getElementById("champ1").style.display="none";
        var newli4=document.createElement("li");
        ul.appendChild(newli4);
        compteur=compteur+1;
        newli4.innerHTML="You found in "+compteur+" tries !";
        newli4.style.cssText="font-size : 20px ; font-weight : bold; ";
        document.getElementById("entry").value="";
    }
    else if(champ<hasard){
        indicateur.innerText="The  hidden number is higher";
        var newli2=document.createElement("li");
        ul.appendChild(newli2);
        newli2.innerHTML="hidden number > "+champ;
        indicateur.style.color="black";
        compteur=compteur+1;
        document.getElementById("entry").value="";
    }
    else if(champ>hasard){
        indicateur.innerText="The hidden number is lower";
        var newli3=document.createElement("li");
        ul.appendChild(newli3);
        newli3.innerHTML="hidden number < "+champ;
        indicateur.style.color="black";
        compteur=compteur+1;
        document.getElementById("entry").value="";
    }

    if(compteur==10 ){
        document.getElementById("indicator").innerText="You lost ! The hidden number was "+hasard+" !";
        document.getElementById("indicator").style.color="red";
        document.getElementById("champ1").style.display="none";
        document.getElementById("button-replay").style.display="block";
    }
});


document.getElementById("button-replay").addEventListener("click",function(){
    document.getElementById("champ1").style.display="none";
    document.getElementById("playingarea").style.display="none";
    document.getElementById("button-replay").style.display="none";
    document.getElementById("start-menu").style.display="block";
    compteur=0;
});