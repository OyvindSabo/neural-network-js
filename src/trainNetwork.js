const { getError, randomMutation, visualizeError } = require('./networkUtils');

const trainNetwork = (network, trainingData, { maxError, learningRate }) => {

  // Assign a weight of 0 to all edges
  for (let edge of network.edges) {
    edge.currentWeight = 0;
  }
  // Find the error given by the current weights
  let currentError = getError(network, trainingData, false)
  let newError;

  // While the error is still above maxError, mutate all weights and update current weights if the new weights result in a lower error
  do {
    // Mutate all edges slightly
    const mutationFactor = Math.min(learningRate, learningRate * currentError);
    for (let edge of network.edges) {
      edge.newWeight = randomMutation(edge.currentWeight, mutationFactor);
    }
    newError = getError(network, trainingData, true);
    if (newError < currentError) {
      visualizeError(newError);
      console.log('\nnewError: ', newError, '\n');
      for (let edge of network.edges) {
        edge.currentWeight = edge.newWeight;
        currentError = newError;
      }
    }
  } while (currentError > maxError);
  console.log('errorForThisIteration: ', errorForThisIteration);
}

module.exports = { trainNetwork };