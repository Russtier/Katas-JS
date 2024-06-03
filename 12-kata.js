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

function removeDuplicates(duplicates) {
  let unico = [];
  duplicates.forEach(element => {
      if (!unico.includes(element)) {
          unico.push(element);
      }
  });
  return unico;
}
console.log(removeDuplicates(duplicates));