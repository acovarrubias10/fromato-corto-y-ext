import FechaNacimiento from "./FechaNacimiento.js" 
class Main {
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
}

let app = new Main()
app.probarFechas()