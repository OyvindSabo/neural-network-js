// The three next lines are just for testing purposes and should be removed
const fs = require('fs');
const waveHeights = fs.readFileSync(`${__dirname}/waveHeights.txt`, 'utf8');
const waveHeightArray = waveHeights.split('\n').map(e => parseFloat(e));


const { feedForward, getError, randomMutation, toOneOrZero } = require('./networkUtils');

const createNetwork = ({ inputLength, hiddenLength, outputLength }) => {

  // Create the inputLayer
  const inputLayer = [];
  for (let i = 0; i < inputLength; i++) {
    inputLayer.push({ outE: [], value: undefined });
  }
  
  // Create the hidden layer
  const hiddenLayer = [];
  for (let h = 0; h < hiddenLength; h++) {
    hiddenLayer.push({ inE: [], outE: [], value: undefined });
  }
  
  // Create output layer 
  const outputLayer = [];
  for (let o = 0; o < outputLength; o++) {
    outputLayer.push({ inE: [], value: undefined });
  }

  // Create edges from inputLayer to hiddenLayer
  const edges = [];
  for (let inputNode of inputLayer) {
    for (let hiddenNode of hiddenLayer) {
      const edge = { outV: inputNode, inV: hiddenNode, currentWeight: undefined, newWeight: undefined };
      inputNode.outE.push(edge);
      hiddenNode.inE.push(edge);
      edges.push(edge);
    }
  }

  // Create edges from hiddenLayer to outputLayer
  for (let hiddenNode of hiddenLayer) {
    for (let outputNode of outputLayer) {
      const edge = { outV: hiddenNode, inV: outputNode, currentWeight: undefined, newWeight: undefined };
      hiddenNode.outE.push(edge);
      outputNode.inE.push(edge);
      edges.push(edge);
    }
  }

  const network = { inputLayer, hiddenLayer, outputLayer, edges }
  return network;
}

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
      console.log('currentError: ', currentError, '\n');
      // <THe following three lines are just for temporary tests and should be removed
      console.log('getOutput(network, waveHeightArray.slice(1100, 1200)): ', getOutput(network, waveHeightArray.slice(1100, 1200)));
      console.log('');
      console.log('The actual waveheight at time 1209: ', waveHeightArray[1209]);
      console.log('The actual waveheight at time 1210: ', waveHeightArray[1210]);
      console.log('The actual waveheight at time 1211: ', waveHeightArray[1211]);
      for (let edge of network.edges) {
        edge.currentWeight = edge.newWeight;
        currentError = newError;
      }
    }
  } while (currentError > maxError);
  console.log('errorForThisIteration: ', errorForThisIteration);
}

const getOutput = (network, input) => {
  feedForward(network, input);
  const outputValues = network.outputLayer.map(outputNode => outputNode.value);
  return outputValues;
}

module.exports = { createNetwork, getOutput, trainNetwork };