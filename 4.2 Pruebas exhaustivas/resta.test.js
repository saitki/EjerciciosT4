const { describe } = require('node:test');
const { resta } = require('./resta.js');


describe('Pruebas de la función resta con operando resta y division', () => {
  // 1 - Normales
  test('La resta de 2 menos 5 debe ser -3', () => {
    expect(resta(2, 5)).toBe(-3);
  });

  // 2 - Decimales
  test('La resta de 2.5 menos 5.7 debe ser -3.2', () => {
    expect(resta(2.5, 5.7)).toBeCloseTo(-3.2);
  });

  // 3 - Frontera
  test('La resta de 0 menos 5 debe ser -5', () => {
    expect(resta(0, 5)).toBe(-5);
  });

  // 4 - Frontera
  test('La resta de Number.MAX_SAFE_INTEGER menos 5.7', () => {
    expect(resta(Number.MAX_SAFE_INTEGER*2, 5.7)).toBeCloseTo(Number.MAX_SAFE_INTEGER*2 - 5.7);
  });

  // 5 - Fuera de frontera 
  test('La resta con Number.MAX_SAFE_INTEGER10 debe lanzar error', () => {
    expect(resta(Number.MAX_SAFE_INTEGER*10, 5.7)).toBeCloseTo(Number.MAX_SAFE_INTEGER*10 - 5.7);
  });

  // 6 - Invalido no definido
  test('La resta de undefined menos 8 debe ser NaN', () => {
    expect(resta(undefined, 8)).toBeNaN();
  });

  // 7 - Sin argumentos
  test('La resta sin argumentos debe ser NaN', () => {
    expect(resta()).toBeNaN();
  });

  // 8 - Por tipo nulo
  test('La resta de null menos 8 debe ser -8', () => {
    expect(resta(null, 8)).toBe(-8); 
  });

  // 9 - Por tipo cadena
  test('La resta de "3" menos "1.5" debe ser 1.5', () => {
    expect(resta('3', '1.5')).toBeCloseTo(1.5);
  });

  // 10 - Por negativo con 0
  test('La resta de 0 menos 7 debe ser -7', () => {
    expect(resta(0, 7)).toBe(-7);
  });

  // 11 - Por negativos ambos
  test('La resta de -3 menos -5 debe ser 2', () => {
    expect(resta(-3, -5)).toBe(2);
  });
});

