//Ejercicio 42

function swap(array, indice1, indice2) {
  let temporal = array[indice1];
  array[indice1] = array[indice2];
  array[indice2] = temporal;

  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap(fantasticFour, 0, 2));