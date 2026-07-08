//Ejercicio 12
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  const listaUnicos = [];
  for (const element of list) {
    if (!listaUnicos.includes(element)){
      listaUnicos.push(element);
    }
  }
 return listaUnicos;
}
removeDuplicates(duplicates)