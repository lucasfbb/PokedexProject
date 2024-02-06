const {gets, print} = require('./aula');

const quantidadeNumeros = gets();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();

    if(numero % 2 === 0){
        if(maiorPar===null || numero>maiorPar){
            maiorPar = numero;
        }
    }else{
        if(menorImpar===null || numero<menorImpar){
            menorImpar = numero;
        }
    }
}


print('Maior numero par: '+maiorPar);
print('Maior numero impar: '+menorImpar);