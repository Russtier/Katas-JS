let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  console.log(element);
}
console.log("---------------");

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if ((element % 2) == 0) {
    console.log(element);
  }
}
console.log("---------------");

let ovejas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < ovejas.length; i++) {
  const oveja = ovejas[i];
  if (oveja < ovejas.length - 1) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido!");
  }
  console.log(oveja);
}