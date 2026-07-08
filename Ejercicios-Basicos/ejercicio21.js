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