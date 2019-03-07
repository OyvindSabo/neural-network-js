const fs = require('fs');
const inputData = JSON.parse(fs.readFileSync(`${__dirname}/inputData.json`));
const weights = JSON.parse(fs.readFileSync(`${__dirname}/weights.json`));
const { NeuralNetwork } = require('./neuralNetwork');

const neuralNetwork = new NeuralNetwork();
neuralNetwork.setWeights(weights);
const result = network.getResult(inputData);
console.log('result');