// alert("Todo bien");
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

// var sube = 38;

// console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
// document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 100, 200, 200, 100, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    // Arrancamos a dibujar un camino
    lienzo.beginPath();
    // Decidimos de la linea es de color rojo
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    // Nos movimos desde el punto 100,100
    lienzo.moveTo(xinicial,yinicial);
    // hasta el 200,200
    lienzo.lineTo(xfinal,yfinal);
    // Cerramos la linea
    lienzo.stroke();
    // Terminamos de dibujar
    lienzo.closePath();
}

function dibujarTeclado (evento)
{
    // if(evento.keyCode == teclas.UP)
    // {
    //     console.log("Ariba!!");
    // }
    var colorcito = "blue";
    var movimiento = 10;

    switch(evento.keyCode)
    {

        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;   
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;

        default:
        console.log("asdasd!!");
        break;
    }
}