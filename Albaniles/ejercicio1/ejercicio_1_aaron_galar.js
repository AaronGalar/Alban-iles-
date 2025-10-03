/* Escribe una función, llamada isLeapYear que:
-
-
-
acepta un único argumento:
o el argumento de entrada es de tipo str
o el año puede tener un valor entre “1900” y “100000”
debe retornar un único valor de tipo booleano:
o en caso de que el año sea bisiesto, el retorno será verdadero
o si el año no es bisiesto, retornará falso.
ejemplo:
o input: “1990”
o output: False
o 1990 no es múltiplo de 4, así que no es un año bisiesto.*/ 

function isLeapYear (year) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear("100000")); 

module.exports = {
  isLeapYear,
};


