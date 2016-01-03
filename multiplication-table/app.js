function multiplicationTable(row, col){
  var multTable = [];
  for (var i = 1; i<= row; i++){
    var curRow = i - 1;
    multTable[curRow] = [];
    for (var j = 1; j <= col; j++){
      var curCol = j - 1;
      multTable[curRow][curCol] = i * j;
    }
  }
  return multTable;
}

console.log(multiplicationTable(3, 3));
