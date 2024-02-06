const {gets, print} = require('./aula');

const salarioBruto = gets();
const adicional = gets();

let percentual = 0;

function calculo(salarioBruto, adicional){
    if(salarioBruto<=1100){
        percentual = 0.05;
    }else if(salarioBruto > 1100 && salarioBruto <2500){
        percentual = 0.1;
    }else{
        percentual = 0.15;
    }
    
    return salarioBruto - (percentual*salarioBruto) + adicional;
}

print(calculo(salarioBruto, adicional));