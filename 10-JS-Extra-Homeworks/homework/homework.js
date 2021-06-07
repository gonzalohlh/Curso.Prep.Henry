
// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = Object.entries(objeto);
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objCantidadCaracter = {};
  for (var i = 0; i<string.length; i++) {
    var caracter = string[i];
    if (objCantidadCaracter[caracter] === undefined) {
      objCantidadCaracter[caracter] = 1;
    }
    else {
      objCantidadCaracter[caracter] ++;
    }
  }
  return objCantidadCaracter;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var Mayuscula = "";
  var minuscula = "";

  function esMayuscula(letra) {
    return letra === letra.toUpperCase();
  }

  for (var i in s) {
    if (esMayuscula(s[i])) {
      Mayuscula += s[i];
    }
    else {
      minuscula += s[i];
    }
  }
  return Mayuscula + minuscula;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var array = str.split("");
  var arrayReverse = array.reverse();
  var nuevaString = array.join("");
  var arrayFrase = nuevaString.split(" ");
  var fraseReverse = arrayFrase.reverse();
  var fraseEspejo = fraseReverse.join(" ");
  return fraseEspejo;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero;
  var n = num.toString();
  if (n === n.split("").reverse().join("")) {
    return "Es capicua";
  }
  else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var array = cadena.split("");
  var result = [];
  for (var i = 0; i<array.length; i++) {
    if (array[i] !== "a" && array[i] !== "b" && array[i] !== "c") {
      result.push(array[i]);
    }
  }
  return result.join("");
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for (var i = 0; i<arr.length; i++) {
    for (var j = i + 1; j<arr.length; j++) {
      if (arr[i].length>arr[j].length) {
        var aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
      }
    }
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  var interseccion = [];
  for (var i = 0; i<arreglo1.length; i++) {
    for (var j = 0; j<arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        interseccion.push(arreglo1[i]);
      }
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

