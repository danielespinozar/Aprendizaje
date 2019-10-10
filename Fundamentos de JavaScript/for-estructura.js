var sacha = {
    nombre: 'Sacha',
    apellido: 'Desp',
    edad: 28,
    peso: 70
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

// function aumentarDePeso (persona) {
//      return persona.peso += 0.2
// }

const INCREMENTO_PESO = 0.1

// a la funcion le entrego el parametro persona
// Persona.peso mayor o igual a 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <=365; i++) {
    var random = Math.random()
    // La funcion se esta ejecutando 365 veces
    if (random < 0.25) {
        //aumenta de peso
        aumentarDePeso(sacha)
    } else if (random < 0.75) {
        //adelgazar
        adelgazar(sacha)

    }
 }

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)}kg`)
