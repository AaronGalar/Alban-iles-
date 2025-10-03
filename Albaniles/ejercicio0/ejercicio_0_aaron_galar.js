/* "Crea una función llamada “createMultiples” que tenga dos parámetros:
- Primer parámetro, un valor numérico que indice el tamaño de elementos del array
- Segundo parámetro, número del cuál se van a obtener los múltiplos.
La función debe devolver un array con el tamaño indicado que contanga los primeros múltiplos de ese número. Por ejemplo: (2, 4) => [4, 8]."*/ 

function createMultiples (length,number){
    let array = []
    for (let i = 1; i <= length;i++) {
       array.push (i*number) 
    }
    return array 
}
// Test personal para probar si funciona 
console.log(createMultiples(2,4))

module.exports = {
  createMultiples,
};
