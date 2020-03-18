export default class Grupo {
    constructor(semestre, grupo) {
        this._semestre = semestre
        this._grupo = grupo
        this._estudiantes = new Array ()
    }

    registrar(estudiante) {
        if (this._encontrarEstudiante(estudiante) != null) {
            return false
        }

        this._estudiantes.push(estudiante)
        return true
    }

    _encontrarEstudiante(estudiante) {
        let result = null

        this._estudiantes.forEach(e => {
            if (e === estudiante) {
                result = e
            }
        })
        return result
    }

    listarEstudiantes() {
        this._estudiantes.forEach((estudiante, i) =>{
            console.log(`${i + 1} ${estudiante.getPerfil()}`)
        })
    }
}