//This code does not execute properly. Try to figure out why.

function multiply(a, b){
    a * b
}

//fixed
function multiply(a, b){
    let c = a * b;
    return c;
}


//tests
const assert = require("chai").assert;

describe("Multiply", () => {
    it("fixed tests", () => {
        assert.strictEqual(multiply(1,1), 1);
        assert.strictEqual(multiply(2,1), 2);
        assert.strictEqual(multiply(2,2), 4);
        assert.strictEqual(multiply(3,5), 15);   
    });
});