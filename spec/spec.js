var multiplication = require('../multiplication-table/app.js');
var multiTap = require('../multi-tap/app.js')

describe("Should return a multiplication table", function(){

  it("rows and columns are defined", function(){

    // expect(multiplication.multiplicationTable(3, 3)).toEqual("Bing Bong");
    expect(multiplication.multiplicationTable(3, 3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

  })

});

describe('Returns characters that have been matched by a regular expression', function(){
  var stringy = "abcdefghijklmnopqrstuvwxyz0123456789 *#"
  it('will find all strings that require one button press', function(){
    expect(multiTap.applicableCharacters(stringy, "one")).toEqual(12)
  })
  it('will find all strings that require two button presses', function(){
    expect(multiTap.applicableCharacters(stringy, "two")).toEqual(9)
  })
  it('will find all strings that require three button presses', function(){
    expect(multiTap.applicableCharacters(stringy, "three")).toEqual(8)
  })
  it('will find all strings that require four button presses', function(){
    expect(multiTap.applicableCharacters(stringy, "four")).toEqual(8)
  })
  it('will find all strings that require five button presses', function(){
    expect(multiTap.applicableCharacters(stringy, "five")).toEqual(2)
  })
})

describe('Returns the number of button presses that will be required per button', function(){
  var stringy = "abcdefghijklmnopqrstuvwxyz0123456789 *#"
  it('will return the sum of every one button press', function(){
    expect(multiTap.buttonPressSum(stringy, "one")).toEqual(12);
  })
  it('will return the sum of every two button presses', function(){
    expect(multiTap.buttonPressSum(stringy, "two")).toEqual(18);
  })
  it('will return the sum of every three button presses', function(){
    expect(multiTap.buttonPressSum(stringy, "three")).toEqual(24);
  })
  it('will return the sum of every four button presses', function(){
    expect(multiTap.buttonPressSum(stringy, "four")).toEqual(32);
  })
  it('will return the sum of every five button presses', function(){
    expect(multiTap.buttonPressSum(stringy, "five")).toEqual(10);
  })
})

describe('Loops through all 5 character types', function(){
  var stringy = "abcdefghijklmnopqrstuvwxyz0123456789 *#"
  it('and returns the total value of the string', function(){
    expect(multiTap.totaller(stringy, "one")).toEqual(12+18+24+32+10)
  })
})
