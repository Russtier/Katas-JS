const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']; // 8
//                     0  1     2    3       4         5       6      7    8

function averageWord(param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    var element = param[i];
   if (typeof element ===  typeof "string") {
     sum += element.length;
  } else {
    sum += element;
  }
 }
 console.log(sum / param.length);
}
averageWord(mixedElements);