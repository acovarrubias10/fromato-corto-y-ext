import FechaNacimiento from "./Fecha-nacimiento.js"
export default class Alumno {
    /**
     * 
     * @param {number} numeroCuenta Número de cuenta del alummno
     * @param {string} nombre Nombre completo del alumno
     * @param {FechaNacimiento} fechaNacimiento Fecha de nacimiento del alumno
     */
    constructor(numeroCuenta, nombre, fechaNacimiento)
    {
        this.numeroCuenta = numeroCuenta
        this.nombre = nombre
        this.fechaNacimiento = fechaNacimiento
    }

    getEdad() {
        return this.fechaNacimiento.getEdad()
    }

    getPerfil() {
        return `${this.numeroCuenta}, ${
            this.nombre
        }, ${this.fechaNacimiento.getFormatoExtendido()}`
    }
}