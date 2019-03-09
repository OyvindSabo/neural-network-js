const fs = require('fs');
const trainingData = JSON.parse(fs.readFileSync(`${__dirname}/trainingData.json`));
const { NeuralNetwork } = require('./neuralNetwork');

const neuralNetwork = new NeuralNetwork();
neuralNetwork.setTrainingData(trainingData); // This step might not be necessary
console.log('trainigData: ', trainingData);
neuralNetwork.trainNetwork(trainingData);
const generatedWeights = neuralNetwork.getWeights();
try {
  fs.writeFileSync(`${__dirname}/weights.json`, JSON.stringify(generatedWeights));
} catch (err) {
  console.log('Error writing generatedWeights to weights.json');
}