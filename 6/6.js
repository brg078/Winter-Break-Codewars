https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript



//code
function createPhoneNumber(numbers){
    return(
        `(${numbers[0].toString()}${numbers[1].toString()}${numbers[2].toString()}) ${numbers[3].toString()}${numbers[4].toString()}${numbers[5].toString()}-${numbers[6].toString()}${numbers[7].toString()}${numbers[8].toString()}${numbers[9].toString()}`
    );
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


//tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Create Phone Number", () => {
    it("Fixed tests", () => {
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    });
});