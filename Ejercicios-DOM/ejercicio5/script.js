//Ejercicio 5

/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.*/

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const main = document.querySelector("main");
const ul = document.createElement("ul");

albums.forEach(album => {
  const li = document.createElement("li");
  li.textContent = album;
  ul.appendChild(li);
});

main.appendChild(ul);