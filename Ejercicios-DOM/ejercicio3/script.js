//Ejercicio 3


/*1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const lista = document.createElement("ul")

for (let i = 0; i < countries.length; i++) {
    const item = document.createElement("li")
    item.textContent = countries[i]
    lista.appendChild(item)
}

document.body.appendChild(lista)

console.log(lista)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.



const elemento = document.querySelector(".fn-remove-me")
elemento.remove()


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".*/
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];


const lista1 = document.createElement("ul")

for (let i = 0; i < cars.length; i++) {
    const item = document.createElement("li")
    item.textContent = cars[i]
    lista1.appendChild(item)
}

const contenedorCars = document.querySelector('[data-function="printHere"]')
contenedorCars.appendChild(lista1)

console.log(lista1)

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.*/
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const contenedor = document.querySelector('[data-function="printHere"]');

countries1.forEach(country => {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;

  div.appendChild(h4);
  div.appendChild(img);

  contenedor.appendChild(div); // en vez de document.body.appendChild(div)
});

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.*/

const boton = document.createElement("button");
boton.textContent = "Eliminar último";

boton.addEventListener("click", () => {
  contenedor.lastElementChild?.remove();
});

document.body.appendChild(boton);



/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.*/

countries.forEach(country => {
  const div = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = country.title;

  const img = document.createElement("img");
  img.src = country.imgUrl;
  img.alt = country.title;

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  botonEliminar.addEventListener("click", () => {
    div.remove();
  });

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(botonEliminar);

  contenedor.appendChild(div);
});
