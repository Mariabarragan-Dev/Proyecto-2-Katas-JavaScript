
//Ejercicio 10

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  const suma = numberList.reduce ((acumulador, num) => acumulador + num, 0);
  return suma / numberList.length;
}
console.log(average(numbers1))
