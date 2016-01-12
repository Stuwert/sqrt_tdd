module.exports = {
  isASquare: function(integer){
    return Math.sqrt(integer) % 1  === 0;
    // return "Bing Bong";
  },
  nextSmallest: function(integer){
    return Math.sqrt(integer) - (Math.sqrt(integer) % 1);
  },
  putItAllTogether: function(integer){
    if(this.isASquare(integer)){
      return Math.sqrt(integer);
    }else{
      var nextSmall = this.nextSmallest(integer);
      return [nextSmall, nextSmall + 1];
    }
  },
  smallestRoot: function(integer){
    var nextSmallest = 0, i=1;
    while(i){
      if (i * i > integer){
        return nextSmallest;
      }else{
        nextSmallest = i;
        i++;
      }
    }
  }
}
