const numbers = [1, 2, 3, 5, 45, 37, 58]; // 6

function sumAll(param) {
  for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]);
  console.log(sum);
}
sumAll(numbers);