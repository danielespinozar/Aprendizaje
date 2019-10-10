var sacha = {
    nombre: 'Sacha',
    apellido: 'Dante',
    edad: 29,
    ingeniero: true,
    cocinero: false,
    dj: false,
    drone: false,
    guitarrista: true,
    cantante: false
}

// `${}` esto es el tempete String, que nos permite interpolar
// vairbales, e imporimirlas en el navegador.
function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:` )

    if (persona.ingeniero) {
        console.log('Ingeniero')
    }
    if (persona.cocinero) {
        console.log('cocinero')
    }
    if (persona.dj) {
        console.log('dj')
    }
    if (persona.cantante) {
        console.log('cantante')
    }
    if (persona.drone) {
        console.log('drone')
    }
    if (persona.guitarrista) {
        console.log('guitarrista')
    }
}

var mayoriaDeEdad = 18

function esMayorDeEdad(persona) {
   return persona.edad >= mayoriaDeEdad
}

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona))
    {
        console.log(`${persona.nombre} es mayor de edad`)
    }   else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(sacha)