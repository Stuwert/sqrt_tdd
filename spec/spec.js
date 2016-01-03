var multiplication = require('../multiplication-table/app.js');

describe("Should return a multiplication table", function(){

  it("rows and columns are defined", function(){

    // expect(multiplication.multiplicationTable(3, 3)).toEqual("Bing Bong");
    expect(multiplication.multiplicationTable(3, 3)).toEqual([[1, 2, 3], [2, 4, 6], [3, 6, 9]]);

  })

});
