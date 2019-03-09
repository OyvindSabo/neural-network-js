const fs = require('fs');
const { createNetwork, getOutput, trainNetwork } = require('./network');
//const trainingData = JSON.parse(fs.readFileSync(`${__dirname}/trainingData.json`));

const config = {
  // For creating the network
  inputLength: 2,
  hiddenLength: 2,
  outputLength: 1,
  // For training the network
  maxWeight: 50,
  maxError: 0.2,
};

const trainingData = [
  {input: [0, 0], output: [0]},
  {input: [0, 1], output: [1]},
  {input: [1, 0], output: [1]},
  {input: [1, 1], output: [0]},
];

const network = createNetwork(config);
console.log('network before training: ', network);

trainNetwork(network, trainingData, config);
console.log('network after training: ', network);
console.log('getOutput(network, [0, 0]): ', getOutput(network, [0, 0]));
console.log('getOutput(network, [0, 1]): ', getOutput(network, [0, 1]));
console.log('getOutput(network, [1, 0]): ', getOutput(network, [1, 0]));
console.log('getOutput(network, [1, 1]): ', getOutput(network, [1, 1]));