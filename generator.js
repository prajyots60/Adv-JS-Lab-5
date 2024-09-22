const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function* generatePrimes(limit) {
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      yield num;
    }
  }
}

// Get user input for prime limit
rl.question('Enter the limit for prime numbers: ', (input) => {
  const limit = parseInt(input);
  
  // Validate input
  if (isNaN(limit) || limit <= 0) {
    console.error('Please enter a valid positive integer.');
    rl.close();
    return;
  }

  const primeGenerator = generatePrimes(limit);

  console.log(`Prime numbers up to ${limit}:`);
  for (const prime of primeGenerator) {
    console.log(prime); // Outputs prime numbers up to the limit
  }

  rl.close();
});
