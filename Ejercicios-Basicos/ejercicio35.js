//Ejercicio 35

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
  const encontrados = mutants.filter(function(mutante) {
    return mutante.power === power;
  });

  if (encontrados.length === 0) {
    return "No se ha encontrado ningún mutante con el poder de " + power + ".";
  } else if (encontrados.length === 1) {
    return "Se ha encontrado a " + encontrados[0].name + " con el poder de " + power + ".";
  } else {
    const nombres = encontrados.map(function(mutante) {
      return mutante.name;
    }).join(", ");
    return "Se han encontrado " + encontrados.length + " mutantes con el poder de " + power + ": " + nombres + ".";
  }
}

console.log(findMutantByPower(mutants, 'telepathy'));

console.log(findMutantByPower(mutants, 'invisibility'));