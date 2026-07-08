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