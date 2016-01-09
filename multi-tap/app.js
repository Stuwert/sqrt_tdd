var characterTaps = {
  "one": /[1adgjmptw*#\s]+/,
  "two": /[behknqux0]+/,
  "three": /[cfilorvy]+/,
  "four": /[23456s8z]+/,
  "five":/[79]+/
}

var func = {

  applicableCharacters : function(string, regex){
    return string.split('').filter(function(item){
      return item.search(characterTaps[regex]) !== -1
    })
  },
  buttonPressSum: function(string, regex){
    
  }

}

module.exports = func;
