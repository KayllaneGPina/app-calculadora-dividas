import entrada from 'readline-sync';

console.log('Aplicação de Juros: \n')

let valorDaDivida = entrada.question('Informe o valor devido: R$ ');
let diasAtrasados = entrada.question('Informe quantos dias se passaram desde o vencimento do boleto: ');
const jurosCincoPorCento = 5;
const jurosDezPorCento = 10;
let valorJuros;

console.log(`Dias atrasados: ${diasAtrasados}`)
console.log(`\nValor original da dívida: R$ ${valorDaDivida}`)

if (valorDaDivida > 0) {
    if (diasAtrasados > 0) {
        if (diasAtrasados > 15) {
            valorJuros = (Number(valorDaDivida) / 100) * jurosDezPorCento;
            console.log(`Taxa de Juros: ${jurosDezPorCento}%`)
        } else {
            valorJuros = (Number(valorDaDivida) / 100) * jurosCincoPorCento;
            console.log(`Taxa de Juros: ${jurosCincoPorCento}%`)
        }
    } else {
        console.log("Você está em dia!")
    }
} else {
    console.log("O valor da dívida deve ser maior que zero!")
}

let totalDaDivida = (Number(valorDaDivida)) + valorJuros;

console.log(`Valor total com juros: R$ ${totalDaDivida}`)


