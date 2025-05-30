/*function resta(a, b) {
  return a - b;
}*/

const resta = (a, b) =>{
  return a / b;
}

if(resta(2,5) !== -3){
  console.log('Error en la resta de 2 menos 5');
} 

if(resta(0,0) === 0){
  console.log(`Error en la resta ${resta(0,0)}`);

} 
//console.assert(resta(2,5 ) === -3, 'La resta de 2 menos 5 debe ser -3');
//1-  Normales -> 
console.log('La resta de 2 menos 5 debe ser -3', resta(2,5));
//2- Decimales
console.log('La resta de 2.5 menos 5.7 debe ser -3.2', resta(2.5, 5.7));

//3- Frontera
console.log('La resta de 0 menos 5:', resta(0, 5));
//  -Numeros
//  -Enteros
//  -Enteros seguros
//  Number.MAX_SAFE_INTEGER
//4- Frontera Numeros mayores
console.log('La resta de Number.MAX_SAFE_INTEGER*2 menos 5.7:', resta(Number.MAX_SAFE_INTEGER*2, 5.7));

//5- Fuera de Frontera
console.log('La resta de Number.MAX_SAFE_INTEGER*10 menos 5.7:', resta(Number.MAX_SAFE_INTEGER*10, 5.7));

//6- Invalido no definido undefined
console.log('La resta undefined menos 8:', resta(undefined, 8));

//7- Invalido sin argumentos
console.log('La resta null', resta());
//8- Por tipo nulo 
console.log('La resta de null menos 8: ', resta(null, 8));

//9- Por tipo cadena
console.log('La resta de 3 menos 1.5 en comillas:', resta('3', '1.5'));

//10- Por negativo(0)
console.log('La resta de 0 menos 7:', resta(0, 7));

//11- Por negativas ambas
console.log('La resta de -3 menos -5:', resta(-3, -5));

module.exports = {resta};