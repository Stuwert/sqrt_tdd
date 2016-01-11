function goodVsEvil(good, evil){
  var array = [good, evil]
  array = array.map(function(item){
    return item.split(" ").map(function(item){
      return parseInt(item)
    })
  })
  array[0][1] *= 2, array[0][2] *=3, array[0][3] *= 3, array[0][4] *= 4, array[0][5] *= 10;
  array[1][1] *= 2, array[1][2] *=2, array[1][3] *= 2, array[1][4] *= 3, array[1][5] *= 5, array[1][6] *= 10;
  array = array.map(function(item){
    return item.reduce(function(prev, next){
      return prev + next;
    })
  })
  switch (array[0] > array[1]) {
    case true:
      return "Battle Result: Good triumphs over Evil"
      break;
    default:
      if(array[0] === array[1]){
        return "Battle Result: No victor on this battle field"
      }else{
        return "Battle Result: Evil eradicates all trace of Good"
      }
  }
}

console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
