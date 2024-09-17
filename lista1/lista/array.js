const caixa = document.querySelector("#caixa");
const caixa2 = document.querySelector("#caixa2");
let box1 = ["Matemática", "Português", "fisica", "historia"];
let box2 = ["LP", "OSA",];

box1.push("biologia", "quimica");
box1.push("Artes", "Geografia");

box2.push("DJW", "GAMEART");
box2.unshift("TDDG");
box2.shift();
box2.pop();

box1.map((el) => {
    let one=document.createElement("one");
    one.innerHTML=el;
    caixa.appendChild(one);
})

box2.map((el) => {
    let two=document.createElement("two");
    two.innerHTML=el;
    caixa2.appendChild(two);
})