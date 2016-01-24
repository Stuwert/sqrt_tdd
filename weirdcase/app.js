function toWeirdCase(string){
  var newStringArray = string.split(' ');
  newStringArray = newStringArray.map(function(item){
    return item.split('').map(function(item, i){
      return i % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
    }).join('');
  })
  return newStringArray.join(' ')
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("String String"));
