var characterTaps = {
  "one": {
    value: /[1adgjmptw*#\s]+/,
    multiplier: 1
  },
  "two": {
    value: /[behknqux0]+/,
    multiplier: 2
  },
  "three": {
    value: /[cfilorvy]+/,
    multiplier: 3
  },
  "four": {
    value: /[23456s8z]+/,
    multiplier: 4
  },
  "five":{
    value: /[79]+/,
    multiplier: 5
  }
}

var func = {

  applicableCharacters : function(string, regex){
    return string.split('').filter(function(item){
      return item.search(characterTaps[regex].value) !== -1
    }).length
  },
  buttonPressSum: function(string, regex){
    var total = this.applicableCharacters(string, regex);
    var multiplier = characterTaps[regex].multiplier;
    return total * multiplier;
  },
  totaller: function(string){
    var total = 0;
    for (var regs in characterTaps){
      total+= this.buttonPressSum(string, regs);
    }
    return total
  }

}

module.exports = func;
