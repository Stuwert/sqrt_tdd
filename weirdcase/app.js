function toWeirdCase(string){
  return string.split(' ').map(function(item){
    return item.split('').map(function(item, i){
      return i % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
    }).join('');
  }).join(' ');
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("String String"));
