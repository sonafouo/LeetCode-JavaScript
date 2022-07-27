
// Path: Fib.ts
// Fibonacci Series
// Solution 1 - Slow
function fib(n) {
	if (n <= 1) return 1;
	return fib(n - 1) + fib(n - 2);
}

// Solution 2: fast : Using hash object memoization to store the values  of fibonacci series up to n number of times and return the value of nth number in the series if it is already stored in the hash object.
// If it is not stored in the hash object,
// then calculate the value of nth number and store it in the hash object.

function fibhash(num) {
	let numHash = { 0: 1, 1: 1 };
	for (let i = 2; i <= num; i++) {
		if (numHash[num]) {
			return numHash[num];
    }
    numHash[i] = numHash[i-1] + numHash[i-2];
  }
  return numHash[num];
}


// Solution 3: fast : Using memoization to store the values  of fibonacci series up to n number of times and return the value of nth number in the series if it is already stored in the memoization array.
// If it is not stored in the memoization array,
// then calculate the value of nth number and store it in the memoization array.


function fibMemo(num) {
  let memo = [1, 1];
  for (let i = 2; i <= num; i++) {
    if (memo[num]) {
      return memo[num];
    }
    memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[num];
}


