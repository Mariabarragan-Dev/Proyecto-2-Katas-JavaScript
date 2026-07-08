//Ejercicio 11
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  const suma = list.reduce((acumulador, item) => {
    if (typeof item === "number") {
      return acumulador + item;        
    } else {
      return acumulador + item.length; 
    }
  }, 0);

  return suma / list.length;
}

console.log(averageWord(mixedElements));