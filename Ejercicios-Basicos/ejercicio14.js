//Ejercicio 14
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
 
  const counter = {};
  for (const word of list) {
    counter[word] = (counter[word] || 0) + 1;
  }
  return counter;
}
const resultado = repeatCounter(words);

console.log(resultado);