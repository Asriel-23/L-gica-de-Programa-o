// 1. Function Expression - Valor Base
const calcularValorBase = function(horas, precoHora) {
    return horas * precoHora;
}
// 2. Arrow Function - Adicionar Taxa Fixa 
const adicionarTaxa = (valor) => valor + 2.00;
// 3. Function Declaration - Exibir Recibo
function emitirRecibo(totalFinal) {
    console.log("--- ESTACOINAMENTO ---")
    console.log("Total a pagar: R$ " + totalFinal.toFixed(2));
}
// 4. Execução
let valorBruto = calcularValorBase(3, 10);
let valorComTaxa = adicionarTaxa (valorBruto);
emitirRecibo(valorComTaxa);
