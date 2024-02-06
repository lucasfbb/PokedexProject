
const entradas=[2000, 250];
let i=0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(msg){
    console.log(msg);
}

module.exports = {gets, print};