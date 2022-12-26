//https://www.codewars.com/kata/577a6e90d48e51c55e000217/solutions/javascript


//console.log('Collatz Conjecture');
let count = 0;

function hotpo(n) {
  if (n == 1) {
    console.log('it took this many hotpos: ',count);
    return count;
  } else if (n == 0){
    console.log('can\'t enter 0');
    return count;
  } else if (n%2 == 0) {
    count ++;
    hotpo(n/2);
  } else {
    count ++;
    hotpo((n*3)+1);
  }
}

//console.log(hotpo(23));
hotpo(5);

//This was frustrating as I made a working function that satisfied all conditions of the kata, and I also tested it on code sandboxes, yet codewars wouldn't accept my answer.