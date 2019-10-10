function Persona(nombre, apellido, altura) {
    // this hace referencia al objeto que se acaba de contruir
    this.nombre = nombre
    this.apellido = apellido
    //por ej aqui podemos designar un atributo standar
    // para todas las personas
    this.edad = 20
    this.altura = altura
}

//dentro del prototipo de persona, va a existitr un atributo
// saludar que va a ser una funcion
Persona.prototype.saludar =  function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido} ${this.altura}`)
}

Persona.prototype.medir =  function () {
    if (this.altura >= 18){
        console.log(`${this.nombre} ${this.apellido} ${this.altura} es alta`)
    } else {
        console.log(`Soy Bajo`)
    }
}

// Persona.prototype.soyAlto = () => this.altura > 1.8

// la palabra new hace que se cree un nuevo
// objeto, y se le asigna un prototipo
// New crea un nuevo objeto del prototipo persona
var sacha = new Persona('Sacha', 'Apeliididi', 17)
var erika = new Persona('Erika', 'as', 20)

sacha.saludar()
sacha.medir()
