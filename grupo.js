export default class Grupo {

    constructor(semestre, literal, alumnos)
    {
        this.semestre = semestre
        this.literal = literal
        this.alumnos = new Array()
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
    }

    listarAlumnos() {
        this.alumnos.forEach(alumno=> {
            console.log(`${i+1} ${alumno.getPerfil()})
        })
    }

}