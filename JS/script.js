let numeros = [];
let cero = 0;
let promedio = 0;
let numero = parseFloat(prompt("Digite un numero"));

//Promedio

while (numero) {
    numero = parseFloat(prompt('Digite un numero'));
    numeros.push(numero);    
}
numeros.sort((a, b) => a - b);

console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
    promedio = promedio + numeros[i]; 
}
    
console.log(`El promedio es: ${promedio / numeros.length}`);

//Mediana

let medianaAlta = parseInt((numeros.length / 2) + 0.6);
let medianaBaja = parseInt((numeros.length / 2) - 0.6);


if (numeros.length % 2 == 0) {
    console.log(`La mediana es: ${parseFloat(numeros[medianaAlta])}`);
} else {
    console.log(`La mediana es: ${(numeros[parseFloat(medianaAlta)] + numeros[parseFloat(medianaBaja)]) / 2}`);
}

//Valor Minimo y Valor Maximo

const valorMinimo = numeros.shift();

const valorMaximo = numeros.pop();

console.log(`El valor minimo es: ${valorMinimo}`)
console.log(`El valor maximo es: ${valorMaximo}`)
