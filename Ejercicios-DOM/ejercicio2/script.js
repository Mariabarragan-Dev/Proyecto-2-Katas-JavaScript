//Ejercicio 2

//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const parrafo = document.createElement("div")
document.body.appendChild(parrafo)

console.log(parrafo)

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const texto = document.createElement("p")
document.body.appendChild(texto)

console.log(texto)

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
	//loop con javascript.

const contenedor = document.createElement("div")

for (let i = 1; i <= 6; i++) {
    const parrafo = document.createElement("p")
    parrafo.textContent = "Párrafo " + i
    contenedor.appendChild(parrafo)
}

document.body.appendChild(contenedor)

console.log(contenedor)

//2.4 Inserta dinamicamente con javascript en un html una p con el
	//texto 'Soy dinámico!'.


const texto1 = document.createElement("p")
texto1.textContent = "Soy dinámico!"
document.body.appendChild(texto1)

console.log(texto1)


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here")
h2.textContent = "Wubba Lubba dub dub"

console.log(h2)


//2.6 Basandote en el siguiente array crea una lista ul > li con
//los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement("ul")

for (let i = 0; i < apps.length; i++) {
    const item = document.createElement("li")
    item.textContent = apps[i]
    lista.appendChild(item)
}

document.body.appendChild(lista)

console.log(lista)


//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementos = document.querySelectorAll(".fn-remove-me")

elementos.forEach(function(elemento) {
    elemento.remove()
})

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
	//Recuerda que no solo puedes insertar elementos con .appendChild.

const texto2 = document.createElement("p")
texto2.textContent = "Voy en medio!"

const divs = document.querySelectorAll("div")
divs[0].after(texto2)

console.log(texto2)



//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
//	.fn-insert-here*/

const divs2 = document.querySelectorAll("div.fn-insert-here");

divs2.forEach(div => {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  div.appendChild(p);
});
