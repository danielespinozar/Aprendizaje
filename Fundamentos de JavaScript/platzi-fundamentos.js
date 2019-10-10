
var sacha = {
    nombre: 'Sasha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'adsd',
    edad: 25
}

function imprimirNombreEnMayuscular(persona) {
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function cumpleanos(persona) {
    return {
        // Desglosamos a la persona dentro de este nuevo objeto
        ...persona,
        edad: persona.edad + 1
    }
    // persona.edad +=1
} 

imprimirNombreEnMayuscular(sacha)

// cumpleanos()