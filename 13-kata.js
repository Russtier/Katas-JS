const nameFinder = [
  'Peter',   // 0
  'Steve',   // 1
  'Tony',    // 2
  'Natasha', // 3
  'Clint',   // 4
  'Logan',   // 5
  'Xabier',  // 6
  'Bruce',   // 7
  'Peggy',   // 8
  'Jessica', // 9
  'Marc'     // 10
];

function finderName(array, element) {
  if (array.includes(element)) {
    return `${true}, posición: ${array.indexOf(element)}`;
  } else {
    return false;
  }
}
console.log(finderName(nameFinder, "Peggy"));

// function findName(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if(element === array[i]) {
//        return `${true}, posición: ${[i]}`
//     }
//   }
//   return false;
// }
// console.log(findName(mixedElements, 8));