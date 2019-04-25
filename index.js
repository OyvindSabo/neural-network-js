const { generateTrainingData } = require("./src/dataUtils");
const createNetwork = require("./src/network");
const trainNetwork = require("./src/trainNetwork");
const runNetwork = require("./src/runNetwork");

// Initialize network
const networkConfig = {
  inputLength: 100,
  hiddenLength: 50,
  outputLength: 1,
  inputFileName: "./data/weights.txt"
};
const network = createNetwork(networkConfig);

// Generate training data
const trainingDataConfig = {
  numberOfFirstValuesToSkip: 100,
  amountOfDataToUseForTraining: 10000,
  inputLength: 100,
  outputLength: 1,
  distanceFromInputToOutput: 10
};
const trainingData = generateTrainingData(
  "./data/waveHeights.txt",
  trainingDataConfig
);

// Train network
const trainingConfig = {
  learningRate: 0.0000001,
  maxError: 0.00001,
  outputFileName: "./data/weights.txt"
};
trainNetwork(network, trainingData, trainingConfig);

