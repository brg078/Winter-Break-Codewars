//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.









//my code
function shortcut (string) {
    let newString =
        string.split('a').join('')
        .split('e').join('')
        .split('i').join('')
        .split('o').join('')
        .split('u').join('');
    return newString;
}


//tests
const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
  });    
});


//https://www.codewars.com/kata/5547929140907378f9000039/train/javascript