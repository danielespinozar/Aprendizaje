class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja)
    {

       if(dinero > 0)
       {
           div = Math.floor(dinero / bi.valor);

            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }

            entregado.push ( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);

       }


    }

    if(dinero > 0)
    {
        resultado.innerHTML = "Soy un cajero pobre";
    }
    else
    {
            for(var e of entregado)
            {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + "billetes de $"+ e.valor + "<br>";
            }

    }

}

var caja = [];
var entregado = [];

caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 30) );
caja.push( new Billete(10, 20) );
caja.push( new Billete(5, 20) );

var dinero = 0;
var div = 0;
var papeles = 0;


var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][0])

var b = document.getElementById("extraer");
var resultado = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);