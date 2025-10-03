/* Preguntar por pantalla un número entero y que se imprima por pantalla
un triángulo tipo, siendo el número entero el número de líneas que se
imprimen. Un ejemplo sería con el número 5:
1
31
531
7531
97531

*/

let n = parseInt(window.prompt("Dime un número entero"));

for (let i = 1; i <= n; i++) {
    let linea = "";

    for (let num = 2 * i - 1; num >= 1; num -= 2) {
        linea += num + " ";
    }

    alert(linea);
}

