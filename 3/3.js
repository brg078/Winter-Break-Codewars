//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//my solution
function include(arr, item){
    return arr.includes(item);
  }
  


//tests
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(include([1,2,3,4], 3), true )
    assert.strictEqual(include([1,2,4,5], 3), false)
    assert.strictEqual(include([], 3),        false)
  });
});