const comprobarContraseña = require('./password'); 

describe('---- Pruebas unitarias exhaustivas para contraseñas seguras ----', () => {

    test('Caso válido completo', () => {
        expect(comprobarContraseña('Michi#2024Az')).toBe(true);
    });

    test('Inválido: menos de 8 caracteres', () => {
        expect(comprobarContraseña('Michi#1')).toBe(false);
    });

    test('Inválido: sin número', () => {
        expect(comprobarContraseña('Michi#OnlyAz')).toBe(false);
    });

    test('Vacío', () => {
        expect(comprobarContraseña('')).toBe(false);
    });

    test('Inválido: sin carácter especial', () => {
        expect(comprobarContraseña('Michi2024Az')).toBe(false);
    });

    test('Frontera: exactamente 8 caracteres válidos', () => {
        expect(comprobarContraseña('Michi#9A')).toBe(true);
    });

    test('Frontera: exactamente 7 caracteres', () => {
        expect(comprobarContraseña('Michi#9')).toBe(false);
    });

    test('Inválido: no contiene "Michi"', () => {
        expect(comprobarContraseña('Toby#2024Az')).toBe(false);
    });

    test('Coerción de tipo: número', () => {
        expect(comprobarContraseña(12345678)).toBe(false);
    });

    test('Coerción / límite: con varios caracteres especiales permitidos', () => {
        expect(comprobarContraseña('Michi!@#2024A')).toBe(true);
    });

});
