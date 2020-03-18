import FechaNacimiento from "./fecha-nacimiento.js"
import Nombre from "./nombre.js"

export default class Persona {
    
    /**
     * 
     * @param {Nombre} nombre 
     * @param {FechaNacimiento} fechaNacimiento 
     * @param {string} genero 
     */
    
    constructor(nombre, fechaNacimiento, genero){
        this._nombre = nombre
        this._fechaNacimiento = fechaNacimiento
        this._genero = genero.toUpperCase() 
    }

    getPerfil(){
        return `${this._nombre.getNombreCompleto()}, ${this._fechaNacimiento.getFormatoCorto()}, ${this._genero}`
    }

}