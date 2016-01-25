// function add(n){
//   return function(y){
//     if(y){
//       console.log("Bing Bog");
//       var newnum = n + y;
//       return add(newnum);
//     }else{
//       return n;
//     }
//   }
// }

function sum(x) {
    return function(y) {
        if (!y) return x;
//                     ^
        else return sum(x + y);
//                      ^^^
    };
}

console.log(sum(1)(2));


function bingBong(n){
  return function(y){
    return n + y;
  }
}

console.log(bingBong(1)(1));
