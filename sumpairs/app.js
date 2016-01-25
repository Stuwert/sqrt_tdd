function sum_pairs(ints, s){
 var delta = 1;
 while (delta < ints.length){
   for(var i = 0; i < ints.length - delta; i++){
     if (ints[i] + ints[i+delta] === s){
       return [ints[i], ints[i+delta]]
     }
   }
   delta++;
 }
 return null;
}

console.log(sum_pairs([10,5,2,3,7,5], 10));
