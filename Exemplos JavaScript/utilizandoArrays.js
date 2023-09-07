// EXEMPLOS MÉTODOS

//O método filter() recebe cada elemento do array e aplica uma instrução condicional a ele.
var nums = [1,2,3,4,5,6,7,8,9,10]

var result = nums.filter(item => item % 2 == 0);
console.log("Exemplo 1 - filter");
console.log(result);
console.log(" ");

function buscarValores(valor){
    return valor < 5;
}

var numsEncontrados = nums.filter(buscarValores);
console.log("Exemplo 2 - filter");
console.log(numsEncontrados);
console.log(" ");


//O método map() permite iterar sobre o array e modificar seus elementos usando uma função
//de callback. function() é a função de callback e a mesma será executada em cada um dos
//elementos do array.
var numeros = nums.map(function(valor){
    return valor * 2;
});

console.log("Exemplo 3 - map");
console.log(numeros);
console.log(" ");

//Outra forma de usar o map():
var pessoas = [
    {nome: "Luiz", idade: 60},
    {nome: "Davi", idade: 25},
    {nome: "Ana", idade: 18},
    {nome: "Carla", idade: 55},
]

nomes = pessoas.map(pessoa => pessoa.nome);
console.log("Exemplo 4 - map");
console.log(nomes);
console.log(" ");


//O método reduce() reduz um array de valores a um único valor. Ele executa uma função de
//redução em cada elemento do array. É a mesma coisa de se usar um for:
var total = 0;
for(var i = 0; i < nums.length; i++){
    total += nums[i];
}

console.log("Exemplo 5 - reduce");
console.log(total);
console.log(" ");

//reduce():
var tot = nums.reduce(function(total, numero){
    return total + numero;
}, 0)

console.log("Exemplo 6 - reduce");
console.log(tot);
console.log(" ");


//O método forEach é usado para percorrer arrays. Ele passa uma função de callback para
//cada elemento do array juntamente aos seguintes parâmetros:
//-valor atual (obrigatório), o valor do elemento atual do array;
//-índice (opcional), o número do índice do elemento atual;
//-array (opcional), o objeto de array ao qual o elemento atual pertence
var a = [10,20,30,40,50];

console.log("Exemplo 7 - forEach");
a.forEach(valor => console.log(valor));
console.log(" ");

var soma = 0;
a.forEach(valor => {
    soma += valor;
});

console.log("Exemplo 8 - forEach");
console.log(soma);
console.log(" ");

console.log("Exemplo 9 - forEach");
a.forEach(function(valor,indice,array){
    console.log(array[indice]);
});