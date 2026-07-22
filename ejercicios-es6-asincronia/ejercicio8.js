/*Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:*/


/*Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters*/

const selectElement = document.getElementById('character-list');
const imageElement = document.querySelector('.character-image');

let characters = [];

  fetch('https://thronesapi.com/api/v2/Characters')
  .then(response => response.json())
  .then(data => {
    characters = data;

    data.forEach(character => {
      const option = document.createElement('option');
      option.value = character.id;
      option.textContent = character.fullName;
      selectElement.appendChild(option);
    });
  });

  selectElement.addEventListener('change', (event) => {
  const selectedId = event.target.value;

  const selectedCharacter = characters.find(
    character => character.id === Number(selectedId)
  );

  imageElement.src = selectedCharacter.imageUrl;
});