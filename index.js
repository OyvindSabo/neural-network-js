const { generateTrainingData } = require('./trainingData')
const { createNetwork, getOutput, trainNetwork } = require('./network');

// We generate the training data
// Total data length is 65481, so 32740 is the length of the first half
console.log('Generating training data...');
const trainingDataConfig = {
  amountOfDataToUseForTraining: 32740,
  inputLength: 1000,
  outputLength: 1,
  distanceFromInputToOutput: 10
}
const trainingData = generateTrainingData('waveHeights.txt', trainingDataConfig);

// We construct the network
console.log('Constructing network...');
const networkConfig = {
  inputLength: 1000,
  hiddenLength: 1,
  outputLength: 1,
};
const network = createNetwork(networkConfig);

// We train the network
console.log('Training network...');
const trainingConfig = {
  learningRate: 0.1,
  maxError: 0.00000001, // 0.000001 is probably the best even if it takes forever 0.0001 also yields good results
};
trainNetwork(network, trainingData, trainingConfig);

// The three next lines are just for testing purposes and should be removed
const fs = require('fs');
const waveHeights = fs.readFileSync(`${__dirname}/waveHeights.txt`, 'utf8');
const waveHeightArray = waveHeights.split('\n').map(e => parseFloat(e));

console.log('Let\'s predict the wave height at time 2110:');
console.log('We supply the wave heights from time 1100 to time 2100')
console.log('getOutput(network, waveHeightArray.slice(1100, 2100)): ', getOutput(network, waveHeightArray.slice(1100, 2100)));
console.log('');
console.log('The actual waveheight at time 2109: ', waveHeightArray[2109]);
console.log('The actual waveheight at time 2110: ', waveHeightArray[2110]);
console.log('The actual waveheight at time 2111: ', waveHeightArray[2111]);