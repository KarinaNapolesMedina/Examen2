var exa = /** @class */ (function () {
    function exa() {
    }
    exa.prototype.uno = function () {
        document.write("¡Hola Mundo!");
    };
    exa.prototype.dos = function () {
        var mensaje = "¡Hola Mundo!";
        document.write(mensaje);
    };
    exa.prototype.tres = function () {
        var nombre = prompt("Introduce tu nombre: ");
        document.write("¡Hola " + nombre + "!");
    };
    exa.prototype.cuatro = function () {
        var nombre = prompt("introduce tu nombre");
        var numero = prompt("introduce un numero:");
        numero = parseFloat(numero);
        console.log(nombre * numero);
    };
    exa.prototype.cinco = function () {
        var nom = prompt("Ingresa tu nombre:  ");
        console.log(nom === null || nom === void 0 ? void 0 : nom.toLowerCase());
        console.log(nom === null || nom === void 0 ? void 0 : nom.toUpperCase());
        console.log(nom === null || nom === void 0 ? void 0 : nom.valueOf());
    };
    exa.prototype.seis = function () {
        var edad = (prompt("¿Cuál es tu edad? "));
        if (edad < 18) {
            alert("Eres menor de edad!");
        }
        if (edad > 18) {
            alert("Eres mayor de edad!");
        }
    };
    exa.prototype.siete = function () {
        var cadena = "contraseña";
        var contra = prompt("Introduce la contraseña: ");
        if (cadena == (contra === null || contra === void 0 ? void 0 : contra.toString())) {
            console.log("La contaseña coincide");
        }
        else {
            console.log("La contraseña no coincide");
        }
    };
    exa.prototype.ocho = function () {
        var palabra = prompt("Introduce una palabra: ");
        alert(palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n");
    };
    exa.prototype.nueve = function () {
    };
    exa.prototype.diez = function () {
        var monto = (prompt("¿Cantidad a invertir? "));
        var intereses = (prompt("¿Interés porcentual anual? "));
        var tiempo;
        (prompt("¿Años?"));
        for (var i = 0; i < tiempo.length; i++) {
            monto *= 1 + intereses / 100;
            print("Capital tras " + str(i + 1) + " años: " + str(round(monto, 2)));
        }
    };
    exa.prototype.ejecutar = function () {
        var opcion = prompt("Selecciona el programa que quieres ejecutar: \n                                    1.-  PROGRAMA 1\n                                    2.-  PROGRAMA 2\n                                    3.-  PROGRAMA 3\n                                    4.-  PROGRAMA 4\n                                    5.-  PROGRAMA 5\n                                    6.-  PROGRAMA 6\n                                    7.-  PROGRAMA 7\n                                    8.-  PROGRAMA 8\n                                    9.-  PROGRAMA 9\n                                    10.- PROGRAMA 10");
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                this.uno;
                break;
            case 2:
                this.dos;
                break;
            case 3:
                this.tres;
                break;
            case 4:
                this.cuatro;
                break;
            case 5:
                this.cinco;
                break;
            case 6:
                this.seis;
                break;
            case 7:
                this.siete;
                break;
            case 8:
                this.ocho;
                break;
            case 9:
                this.nueve;
                break;
            case 10:
                this.diez;
                break;
        }
    };
    return exa;
}());
var final = new exa();
final.ejecutar();
