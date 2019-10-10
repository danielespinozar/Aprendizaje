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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

// a la funcion le entrego el parametro persona
// Persona.peso mayor o igual a 0.2
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META) {
    // debugger
    if (comeMucho()) {
        //aumentarDePeso
        aumentarDePeso(sacha)
    }
    if (realizaDeporte()){
        //adelgazar
        adelgazar(sacha)
    }
    // al finalizar el while incrementamos en uno la cantidad
    // de dias
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${sacha.nombre} adelgazo 3kg ${sacha.peso}kg`)
