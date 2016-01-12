// We want to approximate the sqrt function. Usually this functions takes a floating point number and returns another floating point number, but in this kata we're going to work with integral numbers instead.
//
// Your task is to write a function that takes an integer n and returns either
//
// an integer k if n is a square number, such that k * k == n or
// a range (k, k+1), such that k * k < n and n < (k+1) * (k+1).

var square = require('../sqrtapprox/sqrtapprox');

describe("Determine whether or not the number is a square root", function(){
  it('by returning true if the number is a square root', function(){
    expect(square.isASquare(4)).toEqual(true);
  })
  it('by returning true if the number is a square root', function(){
    expect(square.isASquare(5)).toEqual(false);
  })
})

// describe("Finds the next smallest square", function(){
//   it('iterates until it returns the next smallest square')
// })

describe('Returns the smallest real square', function(){
  it('by removing the decimals from the answer', function(){
    expect(square.nextSmallest(5)).toEqual(2)
  })
})
