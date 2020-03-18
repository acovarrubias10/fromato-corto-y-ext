export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this._nombre = nombre.toUpperCase()
        this._apellidoPaterno = apellidoPaterno.toUpperCase()
        this._apellidoMaterno = apellidoMaterno.toUpperCase()
    }
    getNombre(){
        return this._nombre
    }
    setApellidoPaterno(apellido){
        this._apellidoPaterno = apellido.toUpperCase()
    }
    apellidoMaterno(){
        return this._apellidoMaterno
    }
    setApellidoMaterno(apellido){
        this._apellidoMaterno = apellido.toUpperCase()
    }
    getNombreCompleto(){
        return `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`
    }
    getInvertido(){
        return `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`
    }
    getIniciales(){
        return `${this._nombre.charAt(0)} ${this._apellidoPaterno.charAt(0)} ${this._apellidoMaterno.charAt(0)}`
    }
}