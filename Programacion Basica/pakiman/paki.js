
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

class Pakiman 
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";

        this.imagen.src = imagenes[this.nombre];
    }

    hablar()
    {
        alert(this.nombre);
    }

    mostrar()
    {
        document.write("<p>");
        document.body.appendChild(this.imagen);
        document.write(this.nombre);
        document.write(this.vida);
        document.write(this.ataque);
        document.write("</p>");
    }
}
var coleccion = [];

coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(freddito of coleccion)
{
    freddito.mostrar();
}
// pokacho.mostrar();

