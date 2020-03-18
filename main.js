import FechaNacimiento from "./fecha-nacimiento.js" 
import alumno from "./alumno.js" 
import Alumno from "./alumno.js"
import Grupo from "./grupo.js"

class Main {
    constructor() {
        this.alumno1 = new Alumno(20164376, "Vanessa Cova", new FechaNacimiento(25, 2, 2001))
        this.alumno2 = new Alumno(20163728, "Martin Mojica", new FechaNacimiento(21, 3, 2001))
    
        this.grupo1 = new Grupo(2, "G")
    }
    
    probarGrupo() {
        this.grupo1.agregarAlumno(this.Alumno1)
        this.grupo1.agregarAlumno(this.Alumno2)
        this.grupo1.listarAlumnos()
    }

    probarAlumno() {
        console.log(this.alumno1.getEdad())
        console.log(this.alumno1.getPerfil())

        console.log(this.alumno2.getEdad())
        console.log(this.alumno2.getPerfil())
    }

    probarFechas() {
        let fecha1 = new FechaNacimiento(10, 1, 2000)
        let fecha2 = new FechaNacimiento(20, 5, 2005) 
    
        console.log(fecha1.getFormatoCorto())
        console.log(fecha2.getFormatoCorto())
        console.log(fecha1.getFormatoExtendido())
        console.log(fecha2.getFormatoExtendido())
        console.log(fecha1.getEdad())
        console.log(fecha2.getEdad())
    }

    probarCiclos() {
        let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        dias.forEach((dia, i)=>{
            console.log(`${dia},${i}`)
        })
    }

}



let app = new Main()

app.probarGrupo()