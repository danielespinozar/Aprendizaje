var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}




// const esAlta = () => {, esta condicion, va a ir recibiendo
// en el ( parentisis ) cada uno de los elementos del array
// const esAlta = (persona) => persona.altura > 1.8
const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

// var personasAltas = personas.filter(condicion)
var personasAltas = personas.filter(esAlta)

// map, va a ejecutar esta funcion por cada persona 
// y recornara cada persona, para editar el array
const pasarAlturaACms = persona => ({
    // persona desglosada
    ...persona,
    // altura = altura*100
    altura: persona.altura * 100

})


// {
    // vamos a retornar un nuevo objeto
    // return {
        // persona desglosada
        // ...persona,
        // altura = altura*100
//         altura: persona.altura * 100
//     }
// }

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
// console.log(personas)

// i < personas.length para que valla hasta la cantidad de personas que haya
// for ( var i =0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura}`)
// }