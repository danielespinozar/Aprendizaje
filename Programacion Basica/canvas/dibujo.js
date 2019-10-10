
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

// dibujarLinea("grey",0,10,20,300);
// dibujarLinea("grey",0,20,30,300);
// dibujarLinea("grey",0,30,40,300);
// dibujarLinea("grey",0,40,50,300);
// dibujarLinea("yelow",310,10,220,10);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    // Arrancamos a dibujar un camino
    lienzo.beginPath();
    // Decidimos de la linea es de color rojo
    lienzo.strokeStyle = color;
    // Nos movimos desde el punto 100,100
    lienzo.moveTo(xinicial,yinicial);
    // hasta el 200,200
    lienzo.lineTo(xfinal,yfinal);
    // Cerramos la linea
    lienzo.stroke();
    // Terminamos de dibujar
    lienzo.closePath();
}

function dibujoPorClick()
{
    // con texto.value voy al texto que se ingreso en el input del thml
    // var xxxx = parseInt(texto.value);
    // alert("No me toques ahi" + x);
    // var lineas = xxxx;
    // var xxxx = parseInt(texto.value);
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("grey", 0, yi, xf, 300);
        console.log("linea "+ l);
    }

    // while(l < lineas)
    // {
    //     yi = 10 * l;
    //     xf = 10 * (l + 1);
    //     dibujarLinea("grey", 0, yi, xf, 300);
    //     console.log("linea "+ l);
    //     l = l + 1;
    // }

    // while(l < lineas )
    // {
    //     dibujarLinea("grey",0,0,10,300);
    //     console.log("linea "+ l)
    //     l = l + 2;
    // }

    dibujarLinea("red",0,0,0,300);
    dibujarLinea("red",0,300,300,300);
}