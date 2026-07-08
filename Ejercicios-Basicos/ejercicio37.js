//Ejercicio 37

const movies3 = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];


const categorias = [];

for (const element of movies3) {
  for (const categoria of element.categories) {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  }
}

console.log(categorias);