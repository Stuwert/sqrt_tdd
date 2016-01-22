function uniqueInOrder(iterable){
  var container = []
  for(var i=0; i <iterable.length; i++){
    if(i===0 || iterable[i] !== container[container.length-1]){
      container.push(iterable[i]);
    }
  }
  return container;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
