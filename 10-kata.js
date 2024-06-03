const numbers = [12, 21, 38, 5, 45, 37, 6]; // 6

// let sum = 0;
function average(param) {
  for (let i = 0, sum = 0; i < numbers.length; sum += numbers[i++]) {
    // var num = numbers[i];
    // sum += num;
    console.log(sum);
 }
}
average(numbers);