const { diezmasdiez, Persona, getNull, getUndefined, getDefinido, NumeroExacto, NumeroMayor, NumeroMenor, Frase,ListaDeAnimales,getNumeroeEjemplo,getPersona } = require('./matchers');

//Ejercicio A
test('10 mas 10 son 20', () => {
  expect(diezmasdiez()).toBe(20);
});
//Ejercicio B
test('El objeto persona debe ser igual al esperado', () => {
  const PersonaComparada = { nombre: "Alejandro", edad: 21 };
  expect(Persona()).toEqual(PersonaComparada);
});
//Ejercicio C
test('Tiene que retornar un valor null', () => {
  expect(getNull()).toBeNull(); 
});

test('Tiene que retornar un valor undefined', () => {
  expect(getUndefined()).toBeUndefined(); 
});

test('Tiene que retornar un valor definido', () => {
  expect(getDefinido()).toBeDefined();
});
//Ejercicio D
test('El número debe ser mayor que 3', () => {
  expect(NumeroMayor()).toBeGreaterThan(3); 
});

test('El número debe ser menor que 10', () => {
  expect(NumeroMenor()).toBeLessThan(10); 
});

test('El número debe ser mayor o igual que 17', () => {
  expect(NumeroExacto()).toBeGreaterThanOrEqual(17); 
});
//Ejercicio E
test('La frase debe contener la palabra "animal"', () => {
  expect(Frase()).toMatch(/animal/); 
});

test('La frase debe terminar con la palabra "Gato"', () => {
expect(Frase()).toMatch(/Gato\.$/); 
});

//Ejercicio F
test('La lista de Animales debe contener "Gato"', () => {
  expect(ListaDeAnimales()).toContain("Gato");
});

test('La lista de Animales debe contener "Leon"', () => {
  expect(ListaDeAnimales()).toContain("Leon");
});

//Ejercicio G
test('El número no debe ser igual a 121', () => {
  expect(getNumeroeEjemplo()).not.toBe(121);
});

//Ejercicio H
test('Debe resolverse con un objeto de persona', () => {
  return expect(getPersona(true)).resolves.toEqual({ nombre: "Alejandro", edad: 21 });
});

test('Debe rechazarse con mensaje de error', () => {
  return expect(getPersona(false)).rejects.toBe("Usuario no valido");
});