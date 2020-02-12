export default class FechaNacimiento {
    constructor(dia, mes, año){
        this.fecha = new Date(año, mes -1, dia)
        this.diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        this.nombreMes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    }
    getFormatoCorto() {
        return`${this.fecha.getDate()}/${this.fecha.getMonth() + 1}/${this.fecha.getFullYear()}`
    }
    getFormatoExtendido() {
        let dia = this.diaSemana[this.fecha.getDay()]
        let mes = this.nombreMes[this.fecha.getMonth()]
        console.log(`${dia} ${this.fecha.getDate()} de ${mes} del ${this.fecha.getFullYear()}`)
    }

    getEdad () {
        let difMSeg = Date.now() - this.fecha
        let mSegAño = 1000 * 60 * 60 * 24 * 365
        let edad = Math.trunc(difMSeg / mSegAño)
       return edad
    }
    }

    let fecha1 = new FechaNacimiento(10, 1, 2000)
    let fecha2 = new FechaNacimiento(20, 5, 2005) 

    console.log(fecha1.getFormatoCorto())
    console.log(fecha2.getFormatoCorto())

    fecha1.getFormatoExtendido()
    fecha2.getFormatoExtendido()
    
    console.log(fecha1.getEdad())
    console.log(fecha2.getEdad())