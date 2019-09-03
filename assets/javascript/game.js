( function(){

let countreset = 0;
let countshot1taken = 0;
let countshot2taken = 0;
let countgoal1 = 0;
let countgoal2 = 0;

const teamonebutton = document.getElementById("teamone-shoot");
const teamtwobutton = document.getElementById("teamtwo-shoot");
const shots1taken = document.getElementById("teamone-numshots");
const shots2taken = document.getElementById("teamtwo-numshots");
const goal1 = document.getElementById("teamone-numhits");
const goal2 = document.getElementById("teamtwo-numhits");
const reset = document.getElementById("reset");
const numreset = document.getElementById("num-resets");

reset.onclick = function(){
    let countshot1taken = 0;
    shots1taken.innerHTML = countshot1taken;
    let countshot2taken = 0;
    shots2taken.innerHTML = countshot2taken;
    let countgoal1 = 0;
    goal1.innerHTML = countgoal1;
    let countgoal2 = 0;
    goal2.innerHTML = countgoal2;
    let countreset = parseInt(numreset.innerHTML) + 1;
    numreset.innerHTML = countreset;
}

teamonebutton.onclick = function(){
    let countshot1taken = parseInt(shots1taken.innerHTML) + 1;
    shots1taken.innerHTML = countshot1taken;
    if(Math.floor(Math.random()*2)==1){
        let countgoal1 = parseInt(goal1.innerHTML) + 1;
        goal1.innerHTML = countgoal1;}
}

teamtwobutton.onclick = function(){
    let countshot2taken = parseInt(shots2taken.innerHTML) + 1;
    shots2taken.innerHTML = countshot2taken;
    if(Math.floor(Math.random()*2)==1){
        let countgoal2 = parseInt(goal2.innerHTML) + 1;
        goal2.innerHTML = countgoal2;}
}


} )();
