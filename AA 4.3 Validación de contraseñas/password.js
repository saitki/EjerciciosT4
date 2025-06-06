function comprobarContraseña(contraseña) {
    if (contraseña.length < 8) return false;
    if (/\s/.test(contraseña)) return false;
    if (!/[A-Z]/.test(contraseña)) return false;
    if (!/[a-z]/.test(contraseña)) return false;
    if (!/[0-9]/.test(contraseña)) return false;
    if (!/[¡@#$%^&*()]/.test(contraseña)) return false;

    if (!contraseña.includes('Michi')) return false;

    return true;
}

module.exports = comprobarContraseña;
