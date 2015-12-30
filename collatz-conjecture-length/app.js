// For any natural number n, if n is even divide it by 2
// if n is odd, multiply it by 3 and add 1
// if you repeat the process continuously n times,
// n will eventually reach 1.

// function collatz(n){
//   var output = 0;
//
//   function nexttime(n){
//     output++;
//     if (n === 1){
//       return output;
//     }else{
//       return (n%2 === 0) ? nexttime(n/2) : nexttime(3*n + 1);
//     }
//   }
//   return nexttime(n);
// }

function collatz(n){
  var output = 1;
  while (n !== 1){
    output ++;
    n = (n%2 === 0) ? n/2 : 3*n+1;
  }
  return output;
}

console.log(collatz(2));
console.log(collatz(20));
