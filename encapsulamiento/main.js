import FechaNacimiento from "./fecha-nacimiento.js"
import Nombre from "./nombre.js"
import Persona from "./persona.js"
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js"
import Grupo from "./grupo.js"

class Main {
    constructor() {
        this.fecha = new FechaNacimiento(3,3,2005)
    }

    /**
     * Metodo de acceso de lectura por el atributo fecha
     */
    
    probarFechaNacimiento(){
        //lectura del atributo fecha
        console.log(this.fecha.getFecha())

        //escritura del atributo
        console.log(this.fecha.setFecha(new Date(2000, 4, 6)))
        console.log(this.fecha.getFormatoLargo())
        console.log(this.fecha.setFecha(new Date(2000, 4, 6)))
        console.log(this.fecha.getFormatoLargo())

        //acceso a los metodos
        console.log(this.fecha.getFormatoCorto())
        console.log(this.fecha.getFormatoLargo())
        console.log(this.fecha.getEdad())
        
    }

    probarNombre(){
        this.nombre = new Nombre("Vanessa", "Covarrubias", "Nava")
        console.log(this.nombre.getNombreCompleto())
        this.nombre.setApellidoPaterno("Covarrubias")
        console.log(this.nombre.getNombreCompleto())
        
        console.log(this.nombre.getInvertido())
        this.nombre.setApellidoMaterno("Nava")
        console.log(this.nombre.getInvertido())

        console.log(this.nombre.getIniciales())
        
    }
    probarPersona(){
        this.persona = new Persona(new Nombre("Vanessa", "Covarrubias", "Nava"), new FechaNacimiento(25,2,2001), "m")
        console.log(this.persona.getPerfil())
    }

    probarGrupo() {
        let e1 = new Estudiante(
            new Nombre("Vanessa", "Covarrubias", "Nava"),
            new FechaNacimiento(25, 2, 2001),
            "Femenino",
            20164376, 
            "acovarrubias10@ucol.mx", 
            "Facultad de telemática"
            )
            let e2 = new Estudiante(
                new Nombre("Martin", "Mojica", "Torres"),
                new FechaNacimiento(30, 4, 2001),
                "Masculino",
                20163289, 
                "mmojica1@ucol.mx", 
                "Facultad de telemática"
                )
                let e3 = new Estudiante(
                    new Nombre("Martin", "Mojica", "Torres"),
                    new FechaNacimiento(30, 4, 2001),
                    "Masculino",
                    20163289, 
                    "mmojica1@ucol.mx", 
                    "Facultad de telemática"
                    )

            let grupo = new Grupo(2, "G")
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e2))
            console.log(grupo.registrar(e3))


            grupo.listarEstudiantes()
            console.log(grupo._encontrarEstudiante(e1))
            console.log(grupo._encontrarEstudiante(e2))

    }

    probarEstudiante() {
        let e = new Estudiante(
            new Nombre("Vanessa", "Covarrubias", "Nava"),
            new FechaNacimiento(25, 2, 2001),
            "Femenino",
            20164376, 
            "acovarrubias10@ucol.mx", 
            "Facultad de telemática"
            )
            e.print()
    }

    probarMaestro() {
        let m = new Maestro(
            new Nombre("Jorge", "Covarrubias", "Merlo"),
            new FechaNacimiento(30, 1, 1995),
            "Masculino",
            5000,
            "Trabajador1",
            "Tipo Contrato")
            m.print()
    }


}

let app = new Main()
app.probarFechaNacimiento()
app.probarNombre()
app.probarPersona()
app.probarEstudiante()
app.probarMaestro()
app.probarGrupo()