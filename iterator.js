const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function createSquareIterator(numbers) {
  let index = 0;
  
  return {
    next: function() {
      if (index < numbers.length) {
        const value = numbers[index] ** 2; // Calculate square
        index++; // Move to the next index
        return { value, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

// Get user input for numbers
rl.question('Enter numbers separated by commas: ', (input) => {
  const numbers = input.split(',').map(Number);
  const squareIterator = createSquareIterator(numbers);

  let result = squareIterator.next();
  while (!result.done) {
    console.log(result.value); // Outputs squares of the numbers
    result = squareIterator.next();
  }

  rl.close();
});
