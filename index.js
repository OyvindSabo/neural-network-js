const { generateTrainingData } = require('./trainingData')
const { createNetwork, getOutput, trainNetwork } = require('./network');

// Initialize network
const networkConfig = { inputLength: 100, hiddenLength: 50, outputLength: 1 };
const network = createNetwork(networkConfig);

// Generate training data
const trainingDataConfig = {
  numberOfFirstValuesToSkip: 100,
  amountOfDataToUseForTraining: 1000,
  inputLength: 100,
  outputLength: 1,
  distanceFromInputToOutput: 10
}
const trainingData = generateTrainingData('waveHeights.txt', trainingDataConfig);

// Train network
const trainingConfig = { learningRate: 0.1, maxError: 0.00001 };
trainNetwork(network, trainingData, trainingConfig);

// The three next lines are just for testing purposes and should be removed
const fs = require('fs');
const waveHeights = fs.readFileSync(`${__dirname}/waveHeights.txt`, 'utf8');
const waveHeightArray = waveHeights.split('\n').map(e => parseFloat(e));

console.log('Let\'s predict the wave height at time 1210:');
console.log('We supply the wave heights from time 1100 to time 1200')
console.log('getOutput(network, waveHeightArray.slice(1100, 1200)): ', getOutput(network, waveHeightArray.slice(1100, 1200)));
console.log('');
console.log('The actual waveheight at time 1209: ', waveHeightArray[1209]);
console.log('The actual waveheight at time 1210: ', waveHeightArray[1210]);
console.log('The actual waveheight at time 1211: ', waveHeightArray[1211]);