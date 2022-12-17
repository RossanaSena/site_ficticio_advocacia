const nome = "Rossana Sena";

console.log(typeof nome);

const x = 10; //number

console.log(typeof x);

const lista = [1, 2, 3]; //object - array

console.log(typeof lista);

const objeto = {name: "Rossana", age: 33}; //object

console.log(typeof objeto);

const y = true; // boolean

console.log(typeof true);

// Estrutura de condição
if(2 > 4) {
    console.log("2 é maior que 4");
} else {
    console.log("2 não é maior que 4");
}

// Estrutura de repetição
const arr = ["a", "b", "c", "d", "e"];

// length = quantidade de elementos

// i++ => i = i + 1

for(let i = 0; i < arr.length; i++ ) {
    console.log("O valor da repetição é: " + arr[i]);
}

function soma(a, b) {
    console.log(a + b);
}

soma(4, 5);

soma(14, 54);

soma(22, 11);

// DOM - possibilidade de interagir com HTML e CSS via JS 

// 1 - seleciona: o elemento. Para isso, crio uma variável.
const brand = document.querySelector("#brand");

console.log(brand);

// 2 - evento: declara um evento para o elemento, "o que precisa acontecer para acontecer tal coisa ex.: um clique

// 3 - executa: executa o que a gente quer
brand.addEventListener("click", function (event) {
    console.log (event.target);
    
    event.target.style.color = "blue";
});

