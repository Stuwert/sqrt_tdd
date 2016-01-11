function iqTest(string){
  var array = string.split(' ');
  var odd = [], even = [];
  array.forEach(function(item){
    if (item % 2 === 0){
      even.push(item);
    }else{
      odd.push(item);
    }
  })
  return odd.length > even.length ? array.indexOf(even[0]) + 1 : array.indexOf(odd[0]) + 1
}

console.log(iqTest("1 4 6 8 10"));
