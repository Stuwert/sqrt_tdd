function diagonalSum(matrix){
  var sum = 0;
  for (var i=0; i<matrix.length; i++){
    sum += matrix[i][i];
  }
  return sum;
}

var exampleArray = [[1, 0, 0, 0, 0],
                   [0, 1, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [0, 0, 0, 1, 0],
                   [0, 0, 0, 0, 1]];


console.log(diagonalSum(exampleArray));
