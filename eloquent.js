// MIN this is how I interpreted the exercise.
function min(x,y) {
	return Math.min(x,y);
}
console.log(min(0, 10));
console.log(min(0, -10));


// MIN: this is what was required. sigh.
function min(x,y) {
	if (x < y) {
    	return x;
    } else {
    	return y;
    }
}
console.log(min(0, 10));
console.log(min(0, -10));

//Here's another solution which I found really interesting.
function min(x,y) {
	return x < y ? x : y; //the ? mark is evaluating if the condition is true or false return that argument.
}
console.log(min(0, 10));
console.log(min(0, -10));


/* * * * * * * * * * * * * * * * * * * * * * * * * */

// Recursive Madness
function isEven(n) {
	if (n === 0) {
    	return true;
    } else if (n === 1) {
		return false;
    } else {
    	return n > 0 ? isEven(n-2) : isEven(n+2);
    }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


/* * * * * * * * * * * * * * * * * * * * * * * * * */

//I really didn't understand 
function countBs(c) {
  return countChar(c, 'B');
}

function countChar(a, b) {
  var result = 0;
  for (var i = 0; i < a.length; i++) {
    if (a.charAt(i) === b) {
      result++;
    }
  }
  return result;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
