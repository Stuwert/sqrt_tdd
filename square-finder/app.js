function isSquare(number){
  //accepts a number and returns true or false based on whether it is a square
  // for (var i=0; i<number; i++){
  //   if (number % i === 0){
  //     if (i * i === number){
  //       return true;
  //     }
  //   }
  // }
  // return false;
  for (var i=0; i*i <= number; i++){
    var result = (i*i === number) ? true : false;
  }
  return result;
}

console.log(isSquare(25));
