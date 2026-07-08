//Ejercicio 1

// 1. Define tu superhéroe favorito:

const miSuperheroeFavorito = "Hulk"

//2. Define un número:

const numeroFavorito = 50

//3. Define las dimensiones:

const altura = 5
const longitud = 10

//4. Calcula la suma:

const suma = altura + longitud;

//5. Imprime los resultados:
console.log(miSuperheroeFavorito)
console.log(numeroFavorito)
console.log(altura)
console.log(longitud)
console.log(suma)

//Ejercicio 2

//1. Luke Skywalker cumple años:
const jedi = {nombre: "Luke Skywalker", edad: 19};

jedi.edad = 25;

//2. Presentación al estilo Leia Organa:

const nombre = "Leia"
const apellido = "Organa"
const edad = 20

console.log("Soy " + nombre + apellido + " , tengo " + edad + " y soy una princesa de Alderaan")
//3. Calculando el coste total de sables de luz:
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const costeTotal = sable1.precio + sable2.precio

console.log(costeTotal)

//4. Actualizando el precio final de las naves:

let precioBaseGlobal = 10000;

precioBaseGlobal =  25000;


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

const precioFinal1 = precioBaseGlobal + nave1.precioFinal;
const precioFinal2 = precioBaseGlobal + nave2.precioFinal;

console.log(precioFinal1)
console.log(precioFinal2)

//Ejercicio 3
//3.1 Multiplica 10 por 5 y muestra el resultado mediante console.

const multi = 10 * 5;
console.log(multi)
//3.2 Divide 10 por 2 y muestra el resultado en un console.

const div = 10 / 2;
console.log(div)

//3.3 Muestra mediante un console el resto de dividir 15 por 9.

const resto = 15 % 9;
console.log(resto)

/*3.4 Usa el correcto operador de asignación que resultará en o = 15,
teniendo dos variables p = 10 y j = 5.*/
let p = 10;
let j = 5;

p += j;

console.log(p)

/*3.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.*/

let c = 10;
let m = 5;

c *= m;

console.log(c)

//Ejercicio 4

//Dado el siguiente array: 

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1 - Saca a "Tendo" por consola atacando su posición.
console.log(aldeanos[3])
//4.2 - Coloca en el último lugar de este array a "Cervasio".
aldeanos.push("Cervasio")
//4.3 - Cambia el primer elemento de este array por "Bambina".
aldeanos[0] = "Bambina";
//4.4 - Dale la vuelta a este array.
aldeanos.reverse()
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
aldeanos[1] = "Canela"
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
console.log(aldeanos [aldeanos.length - 1])


//Ejercicio 5

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

if (number2 / number1 == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}
//Ejercicio 6
//1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.

for (let i = 0; i < 10; i++){
    console.log(i)
}

//1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.

for (let i = 0; i < 10; i++){
    if(i % 2 === 0){
       console.log(i);
    }
    
}

//1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a '¡Dormido!'.

for (let i = 1; i <= 10; i++){
    if(i <= 9){
        console.log("Intentando dormir 🐑")
    }
    else{
    console.log("¡Dormido!")
    }
}



//Ejercicio 7
//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  if(numberOne > numberTwo){
    console.log(numberOne);
    } else{
    console.log(numberTwo);
  }
}
greaterNumber (5, 8);
greaterNumber (10, 5);
//Ejercicio 8
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
  let longest = stringList[0];
  
  for(let i = 1; i < stringList.length; i++){
    if(stringList[i].length > longest.length){
        longest = stringList[i];
    }
    }
    return longest;
}
console.log(findLongestWord(avengers));

//Ejercicio 9
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for( let i = 0; i < sumNumbers.length; i++){
    sum += numberList[i];
  }
  return sum;
}
//Ejercicio 10

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  const suma = numberList.reduce ((acumulador, num) => acumulador + num, 0);
  return suma / numberList.length;
}
console.log(average(numbers1))

//Ejercicio 11
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list) {
  const suma = list.reduce((acumulador, item) => {
    if (typeof item === "number") {
      return acumulador + item;        
    } else {
      return acumulador + item.length; 
    }
  }, 0);

  return suma / list.length;
}

console.log(averageWord(mixedElements));
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

//Ejercicio 13
const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
  
  const position = nameList.indexOf(name);

  if (position !== -1) {
    return { found: true, position: position };
  } else {
    return { found: false };
  }
}

console.log(nameFinder(names, "Tony"));   
console.log(nameFinder(names, "Batman")); 

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

//Ejercicio 15

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

products.forEach((product) => {
if (product.includes("Camiseta")){
console.log(product)
}

});


//Ejercicio 16

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const element of placesToTravel) {
  console.log(element)
}
//Ejercicio 17

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
  
  console.log(`La propiedad ${key} tiene como valor: ${alien[key]}`)
  
}
//Ejercicio 18

const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for(let i = placesToTravel1.length - 1; i >= 0; i--){
   if (placesToTravel1[i].id === 11 || placesToTravel1[i].id === 40) {
    placesToTravel1.splice(i, 1);
}
}
console.log(placesToTravel1);//Lo recorro hacia atrás para que cuando se desplace una posición no se salte ninguno.

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


//Ejercicio 20

const popularToys = []

const toys1 = [
    {id: 101, name: 'Super Soaker', sellCount: 15},
    {id: 102, name: 'Tamagotchi', sellCount: 22},
    {id: 103, name: 'Polly Pocket', sellCount: 8},
    {id: 104, name: 'Yo-yo', sellCount: 33},
    {id: 105, name: 'Pikachu plush toy', sellCount: 19},
    {id: 106, name: "Rubik's Cube", sellCount: 27},
    {id: 107, name: 'Fidget Spinner', sellCount: 12},
    {id: 108, name: 'Slinky', sellCount: 5},
    {id: 109, name: 'Magic 8-Ball', sellCount: 38},
    {id: 110, name: 'Troll Doll', sellCount: 20}
];

for (const element of toys1) {
  if(element.sellCount > 15){
    popularToys.push(element)
  }
}
console.log(popularToys)

//Ejercicio 21

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for (const element of users) {
  if(element.years < 18){
    console.log("Usuarios menores de edad " + element.name)
  }
} 

for (const user of users) {
  if(user.years >= 18){
    console.log("Usuarios mayores de edad " + user.name)
  }
}
//Ejercicio 22

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false) {
    foodSchedule[i].name = fruits[fruitIndex];
    fruitIndex++;
  }
}

console.log(foodSchedule);

//Ejercicio 23

const movies1 = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const menor = [];
const mediana = [];
const grande = [];

for (const element of movies1) {
  if(element.durationInMinutes < 100){
    menor.push(element)
  }
  else if (element.durationInMinutes <= 200){
    mediana.push(element)
  } 
  else {
    grande.push(element) 
  
}
}
console.log("Películas menor de 100 minutos", menor)
console.log("Películas menor de 200 minutos", mediana)
console.log("Películas mayor de 200 minutos", grande)
//Ejercicio 24

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

for (const element of characters) {
  if(element.species === "Human"){
    humanCharacters.push(element)
  }
}
console.log(humanCharacters)


//Ejercicio 25

const movies2 = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

let antes2000 = 0;
let despues2000 = 0;

for (const element of movies2) {
  if(element.releaseYear < 2000, + 1){
    antes2000++;
  }else{
    despues2000++;
  }
}
console.log("Películas antes del 2000:", antes2000);
console.log("Películas después del 2000:", despues2000);
//Ejercicio 26

const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 5.55 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 7.58 },
  { title: 'Billie Jean', genre: 'Pop', duration: 4.54 },
  { title: 'Hotel California', genre: 'Rock', duration: 6.31 },
  { title: 'Sweet Child o Mine', genre: 'Rock', duration: 5.56 },
  { title: 'Smells Like Teen Spirit', genre: 'Rock', duration: 5.01 },
  { title: 'Comfortably Numb', genre: 'Rock', duration: 6.23 },
  { title: 'Wish You Were Here', genre: 'Rock', duration: 5.34 },
  { title: 'Black Dog', genre: 'Rock', duration: 4.54 },
  { title: 'Thunderstruck', genre: 'Rock', duration: 4.52 },
  { title: 'Crazy Love', genre: 'Pop', duration: 3.52 },
];
const rockPlaylist = [];

for (const element of songs) {
  if(element.genre === "Rock" &&  element.duration > 5 ){
    rockPlaylist.push(element)
  }
  
}

console.log(rockPlaylist)

//Ejercicio 27

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoon = cartoons[0].name;
let oldestYear = cartoons[0].debut;

for (const element of cartoons) {
  if (element.debut < oldestYear) {
    oldestYear = element.debut;
    oldestCartoon = element.name;
  }
}

console.log(oldestCartoon);

//Ejercicio 28

const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

let sum3 = 0;

for (const element of albums) {
  if(element.genre === "Rock"){
     sum3 += element.duration;
  }
  
}
console.log("La duración de los albúnes de Rock es " ,sum3)

//Ejercicio 29

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

const groupedByDecade = {};

for (const element of starWarsMovies) {
  const decade = Math.floor(element.releaseYear / 10) * 10;//Para quitar decimales

  if (!groupedByDecade[decade]) {
    groupedByDecade[decade] = [];
  }

  groupedByDecade[decade].push(element);
}

console.log(groupedByDecade);


//Ejercicio 30

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const groupedByGenre = {};

for (const element of tracks) {
 const genre = element.genre;

  if (!groupedByGenre[genre]) {
    groupedByGenre[genre] = [];
  }

  groupedByGenre[genre].push(element);
}

console.log(groupedByGenre);
//Ejercicio 31

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

for (const element of artists) {
  for (const influence of element.influences) {
    console.log(element.name + " tiene influencias de " + influence);
  }
}

//Ejercicio 32

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
   let oldest = xMen[0];

  for (const element of xMen) {
    if (element.year < oldest.year) {
      oldest = element;
    }
  }

  return oldest;
}

console.log(findOldestXMen(xMen));

//Ejercicio 33

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
   if (capitals[country]) {
    return capitals[country];
  } else {
    return "País no encontrado";
  }
}
console.log(getCapital("Spain"));
console.log(getCapital("Germany"));
console.log(getCapital("Mexico"));

//Ejercicio 34

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) {
    if (!movies || movies.length === 0) return 0;

  const totalDuration = movies.reduce((sum, movie) => sum + movie.duration, 0);
  const average = totalDuration / movies.length;

  return average;
}

console.log(averageMovieDuration(movies));

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





//Ejercicio 36

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors, currentYear = 2026){  return actors.map(function(actor) {
    const age = currentYear - actor.born;
    return { name: actor.name, age: age };
  });

}
console.log(calculateActorsAges(actors));

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

//Ejercicio 38

const users1 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let sumaVolumen = 0;
let cantidad = 0;

for (const element of users1) {
  for (const sonido in element.favoritesSounds) {
    sumaVolumen += element.favoritesSounds[sonido].volume;
    cantidad++;
  }
}

const media = sumaVolumen / cantidad;

console.log(media);

//Ejercicio 39

const users2 = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const contador = {};

for (const element of users2) {          
   for (const sonido in element.favoritesSounds) {   
    if (contador[sonido]) {
      contador[sonido]++;
    } else {
      contador[sonido] = 1;
    }
  }
}

console.log(contador);

//Ejercicio 40

function findArrayIndex(array, text) {
      for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }

  return -1;
}


const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Leia"));       
console.log(findArrayIndex(mainCharacters, "Rey"));       
console.log(findArrayIndex(mainCharacters, "Obi-Wan"));   
console.log(findArrayIndex(mainCharacters, "Yoda"));       
//Ejercicio 41

function rollDice(caras) {
  return Math.floor(Math.random() * caras) + 1;
}
console.log(rollDice(6));   
console.log(rollDice(23));  
console.log(rollDice(15)); 
//Ejercicio 42

function swap(array, indice1, indice2) {
  let temporal = array[indice1];
  array[indice1] = array[indice2];
  array[indice2] = temporal;

  return array;
}

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap(fantasticFour, 0, 2));

