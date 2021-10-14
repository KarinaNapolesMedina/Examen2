class exa{
    
public uno(){
    document.write("¡Hola Mundo!");
    
}
public dos(){
    const mensaje = "¡Hola Mundo!";
    document.write(mensaje);
}
public tres(){
    const nombre = prompt("Introduce tu nombre: ");
    document.write("¡Hola " + nombre + "!");
}
public cuatro(){    
        const nombre: any=prompt("introduce tu nombre");
        const numero : any= prompt("introduce un numero:");
        numero= parseFloat(numero);        
        console.log(nombre *  numero);
}
public cinco(){
    const nom = prompt("Ingresa tu nombre:  ")
    console.log(nom?.toLowerCase());
    console.log(nom?.toUpperCase());
    console.log(nom?.valueOf());
    
}
public seis(){
    const edad = (prompt("¿Cuál es tu edad? "))
    if (edad < 18) {
        alert("Eres menor de edad!")   
    }
    if (edad > 18){
        alert("Eres mayor de edad!")
        
    
    }
    
}
public siete(){
    const cadena = "contraseña"
    const contra = prompt("Introduce la contraseña: ")
    if(cadena == contra?.toString()){
        console.log("La contaseña coincide");
    } else{
        console.log("La contraseña no coincide");
    }
}
public ocho(){
    const palabra = prompt("Introduce una palabra: ")
    alert(palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n" + palabra + "\n")
}
public nueve(){

}
public diez(){
    const monto = (prompt("¿Cantidad a invertir? "))
    const intereses = (prompt("¿Interés porcentual anual? "))
    const tiempo (prompt("¿Años?"))
    for (let i = 0; i < tiempo.length; i++) {
        monto *= 1 + intereses / 100 
        print("Capital tras " + str(i+1) + " años: " + str(round(monto, 2)))

        
    }
}

public ejecutar() : void{
    
    let opcion : any = prompt(`Selecciona el programa que quieres ejecutar: 
                                    1.-  PROGRAMA 1
                                    2.-  PROGRAMA 2
                                    3.-  PROGRAMA 3
                                    4.-  PROGRAMA 4
                                    5.-  PROGRAMA 5
                                    6.-  PROGRAMA 6
                                    7.-  PROGRAMA 7
                                    8.-  PROGRAMA 8
                                    9.-  PROGRAMA 9
                                    10.- PROGRAMA 10`);

        opcion = parseInt(opcion);
        switch(opcion) {
            case 1:
                this.uno;
                break;
            case 2:
                this.dos
                break;
            case 3:
                this.tres
                break;
            case 4:
                this.cuatro
                break;
            case 5:
                this.cinco
                break;
            case 6:
                this.seis
                break;
            case 7:
                this.siete
                break;
            case 8:
                this.ocho
                break;
            case 9:
                this.nueve
                break;
            case 10:
                this.diez
                break;
            
        }
    }
}
const final = new exa();
final.ejecutar();
