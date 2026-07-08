//Ejercicio 19

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

const toysSinGato = [];

for (const element of toys) {
  if (!element.name.toLowerCase().includes("gato")) {
    toysSinGato.push(element);
  }
}

console.log(toysSinGato);
