let numeros = [];
let cero = 0;
let promedio = 0;
let numero = parseFloat(prompt("Digite un numero"));

//Promedio

while (numero != cero) { //No guarda el primer numero, buscar solucion. Buscar la forma del string vacio.
    numero = parseFloat(prompt('Digite un numero'));
    numeros.push(numero);   
    
}
numeros.sort((a, b) => a - b);

console.log(numeros)

for (let i = 0; i < numeros.length; i++) {
    promedio = promedio + numeros[i]; 
}
    
console.log(`El promedio es: ${promedio / numeros.length}`);

//Mediana del array

let medianaAlta = parseInt((numeros.length / 2) + 0.6);
let medianaBaja = parseInt((numeros.length / 2) - 0.6);

let medianaAltafinal = numeros[medianaBaja]
let medianaBajafinal = numeros[medianaAlta]

console.log(`La mediana es: ${(medianaBajafinal + medianaAltafinal) / 2}`)

//Valor Minimo y Valor Maximo

const valorMinimo = numeros.shift();

const valorMaximo = numeros.pop();

console.log(`El valor minimo es: ${valorMinimo}`)
console.log(`El valor maximo es: ${valorMaximo}`)
