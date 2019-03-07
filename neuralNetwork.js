const getGradient = (previousWeights, currentWeights) =>
  currentWeights.map((weightLayer, i) =>
    weightLayer.map((weight, j) =>
      weight - previousWeights[i][j]));

const getZeroGradient = weights =>
  weights.map(weightLayer => weightLayer.map(weight =>0));

const getNewWeights = (currentWeights, gradient) =>
  currentWeights.map((weightLayer, i) => weightLayer.map((weight, j) => weight + gradient[i][j]));

const simulateAnnealing = (currentWeights, numberOfNewWeights = 10, maxDifference = 1) => {
  let newWeights = [];
  for (let newWeightIndex = 0; newWeightIndex < numberOfNewWeights; newWeightIndex++) {
    newWeights.push(
      currentWeights.map(weightLayer =>
        weightLayer.map(weight =>
          weight + (Math.random() - Math.random())*maxDifference)));
  }
  return newWeights;
}
const generateRandomWeights = trainingData => {
  // Currentlyonly generates weights or last layer.
  const randomWeights = [];
  const layerWidth = trainingData[0].input.length;
  for (let input = 0; input < layerWidth; input++) {
    randomWeights.push(Math.random());
  }
  return [randomWeights];
  // Should return array of arrays corresponding to this.numberOfLayers and size of trainingData
}

class NeuralNetwork {
  constructor(numberOfLayers = 3) {
    this.weights;
    this.trainingData;
    this.numberOfLayers = numberOfLayers;
  }
  setTrainingData(trainingData) {
    this.trainingData = trainingData;
  }
  setWeights(weights) {
    this.weights = weights;
    this.updateNetwork();
  }
  getWeights() {
    return this.weights;
  }
  getError(trainingData, weights) {
    return trainingData.reduce((accumulator, trainingDatum) =>
      Math.pow(this.getResult(trainingDatum.input) - trainingDatum.output), 0);
  }
  trainNetwork(trainingData, iterations = 1000) {
    let currentWeights = this.weights || generateRandomWeights(trainingData);
    let currentError = this.getError();
    let gradient = getZeroGradient(currentWeights)
    for (let iteration = 0; iteration < iterations; iteration++) {
      let minimizesError = false;
      while (!minimizesError) {
        const newWeightsList = getNewWeights(currentWeights, gradient);
        const newRandomWeightsList = simulateAnnealing(currentWeights, 10, 1);// Generate a few random weights around the currentWeights (simulated annealing)
        for (let newWeights of newRandomWeightsList) {
          const newError = this.getError(trainingData, newWeights);
          if (newError < currentError) {
            currentWeights = newWeights;
            currentError = newError;
            minimizesError = true;
          }
        }
        gradient = getGradient(previousWeights, currentWeights);
      }
    }
  }
  getResult(inputData) {
    // Currently only returns inputData
    return inputData;
  }
}

module.exports = {
  NeuralNetwork,
  getGradient,
  getZeroGradient,
  getNewWeights,
  simulateAnnealing,
  generateRandomWeights,
}