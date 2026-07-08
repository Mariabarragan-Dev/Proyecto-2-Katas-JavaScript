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