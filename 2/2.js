//code solution to check if three numbers form a Pythagorean triple

let integers = [2,3,4]


function isPythagoreanTriple(integers) {
  // Good luck friends!
  if ( (integers[0]**2) == ((integers[1]**2)+(integers[2]**2)) ) {
    return true;
  } else if ( (integers[1]**2) == (integers[2]**2)+(integers[0]**2) ){
    return true;   
  } else if ( (integers[2]**2) == (integers[0]**2)+(integers[1]**2) ){
    return true;   
  } else {
    return false;
  }
}

//tests
const chai = require("chai");
const assert = chai.assert;

describe("Simple test cases", function() {
  it("Pass these", function() {
    assert.strictEqual(isPythagoreanTriple([3, 4, 5]), true);
    assert.strictEqual(isPythagoreanTriple([3, 5, 9]), false);
  });
});