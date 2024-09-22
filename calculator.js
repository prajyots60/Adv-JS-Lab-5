const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    if (operation === 'add') {
      resolve(num1 + num2);
    } else if (operation === 'subtract') {
      resolve(num1 - num2);
    } else if (operation === 'multiply') {
      resolve(num1 * num2);
    } else if (operation === 'divide') {
      if (num2 === 0) {
        reject('Error: Division by zero');
      } else {
        resolve(num1 / num2);
      }
    } else {
      reject('Error: Invalid operation');
    }
  });
}

// Get user input
rl.question('Enter first number: ', (firstInput) => {
  rl.question('Enter second number: ', (secondInput) => {
    rl.question('Enter operation (add, subtract, multiply, divide): ', (operation) => {
      const num1 = parseFloat(firstInput);
      const num2 = parseFloat(secondInput);
      
      calculate(num1, num2, operation)
        .then(result => {
          console.log('Result:', result);
          rl.close();
        })
        .catch(error => {
          console.error(error);
          rl.close();
        });
    });
  });
});
