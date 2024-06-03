const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

var num= 11;
var num2 = 40;

for (let i = 0; i < placesToTravel.length; i++) {
  const place = placesToTravel[i];
  if (place.id == num) {
    placesToTravel.splice(i, 1)
  }
  if (place.id == num2) {
    placesToTravel.splice(i, 1)
  }
}
console.log(placesToTravel);