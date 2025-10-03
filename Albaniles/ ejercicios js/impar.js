/*Preguntar un número por input, después, imprimir todos los números
impares hasta él. Un ejemplo sería: “Dime un número entero”. Le
respondemos 22. Nos saca por pantalla: 1, 3, 5, 7, …, 21. */

let n = parseInt(window.prompt("Dime un numero entero"))
for (i=1;i <= n;i++) {

    if (i%2!=0) {
        alert (i)
    }
}
