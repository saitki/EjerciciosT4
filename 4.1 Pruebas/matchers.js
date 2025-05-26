//Ejercicio A
function diezmasdiez(){
    return 10 + 10;
}
//Ejercicio B
function Persona() {
  return {
    nombre: "Alejandro",
    edad: 21
  };
}

//Ejercicio C
function getNull() {
  return null;
}

function getUndefined() {
  return undefined;
}

function getDefinido() {
  return "Definido";
}
//Ejercicio D
function NumeroMayor() {
  return 7;
}

function NumeroMenor() {
  return 5;
}

function NumeroExacto() {
  return 17;
}
//Ejercicio E
function Frase() {
  return "Hola, Mi animal fatorito es el Gato.";
}
//Ejercicio F

function ListaDeAnimales() {
  return ["Gato", "Perrito", "Capibara", "Leon"];
}

//Ejercicio G
function getNumeroeEjemplo() {
  return 7; // número fijo para el ejemplo
}
//Ejercicio H
function getPersona(valido) {
  return new Promise((resolve, reject) => {
    if (valido) {
      resolve({
    nombre: "Alejandro",
    edad: 21
  });
    } else {
      reject("Usuario no valido");
    }
  });
}
module.exports = {
  diezmasdiez,
  Persona,
  getNull,
  getUndefined,
  getDefinido,
  NumeroExacto,
  NumeroMayor,
  NumeroMenor,
  Frase,
  ListaDeAnimales,
  getNumeroeEjemplo,
  getPersona
};