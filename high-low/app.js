function highAndLow(numbers){
  var numArray = numbers.split(" ");
  var highLow;
  numArray.forEach(function(item, i){
    if (i === 0){
      highLow = [parseInt(item), parseInt(item)];
    }else{
      highLow[0] = (parseInt(item) >= highLow[0]) ? parseInt(item) : highLow[0];
      highLow[1] = (parseInt(item) <= highLow[1]) ? parseInt(item) : highLow[1];
    }
  })
  return highLow.join(" ");
}

var string1 = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"
var string2 = "1 -1"
var string3 = "1 1"
var string4 = "1"

console.log(highAndLow(string1));
console.log(highAndLow(string2));
console.log(highAndLow(string3));
console.log(highAndLow(string4));
