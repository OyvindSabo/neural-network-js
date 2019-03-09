const {
  NeuralNetwork,
  getGradient,
  getZeroGradient,
  getNewWeights,
  simulateAnnealing,
  generateRandomWeights,
} = require('./neuralNetwork');

const spaces = (number) => [...Array(number+1).keys()].map(() => ' ').join('');

const functionTester = ({ func, parameterArray, expectedOutput }) => {
  actualOutput = func(...parameterArray);
  const colors = { green: '\x1b[32m', red: '\x1b[31m', reset: '\x1b[0m' };
  const { green, red, reset } = colors;
  if (JSON.stringify(actualOutput) === JSON.stringify(expectedOutput)) {
    console.log(`${green}Testing ${func.name}:${spaces(62-func.name.length)}SUCCESS!${reset}`);
  } else {
    console.log(`${red}Testing ${func.name}:${spaces(64-func.name.length)}ERROR!\x1b[0m`);
    console.log(`  ${red}Expected result: ${JSON.stringify(expectedOutput)}${reset}`);
    console.log(`  ${red}Actual Result:   ${JSON.stringify(actualOutput)}${reset}`);
  }
}

functionTester({
  func: getGradient,
  parameterArray: [
    [[12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]],
    [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
  ],
  expectedOutput: [[-11, -9, -7, -5], [-3, -1, 1, 3], [5, 7, 9, 11]],
});
functionTester({
  func: getZeroGradient,
  parameterArray: [
    [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
  ],
  expectedOutput: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
});
functionTester({
  func: getNewWeights,
  parameterArray: [
    [[12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]],
    [[-11, -9, -7, -5], [-3, -1, 1, 3], [5, 7, 9, 11]],
  ],
  expectedOutput: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
});
functionTester({
  func: generateRandomWeights,
  parameterArray: [
    [
      {"input": [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5], "output": 4},
      {"input": [2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4], "output": 3},
      {"input": [3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3], "output": 2},
      {"input": [4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2], "output": 1},
      {"input": [5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1], "output": 2},
      {"input": [4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2], "output": 3},
      {"input": [3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3], "output": 4},
      {"input": [2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4], "output": 5},
      {"input": [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5], "output": 4},
      {"input": [2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 4], "output": 3},
    ]
  ],
  expectedOutput: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],
});

// getDerivative
/*const currentWeights = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
const newWeights = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
const expectedResult = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
const result = getDerivative(currentWeights, newWeights);
if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
  console.log('\x1b[32mTesting getDerivative:                 SUCCESS!\x1b[0m');
} else {
  console.log('\x1b[31mTesting getDerivative:                       ERROR!\x1b[0m');
  console.log('\x1b[31mExpected result: ', expectedResult, '\x1b[0m');
  console.log('\x1b[31mActual Result:   ', result, '\x1b[0m');
}*/