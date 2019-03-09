const { feedForward, randomWeight, toOneOrZero } = require('./networkUtils');

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
      const edge = { outV: inputNode, inV: hiddenNode, weight: undefined };
      inputNode.outE.push(edge);
      hiddenNode.inE.push(edge);
      edges.push(edge);
    }
  }

  // Create edges from hiddenLayer to outputLayer
  for (let hiddenNode of hiddenLayer) {
    for (let outputNode of outputLayer) {
      const edge = { outV: hiddenNode, inV: outputNode, weight: undefined };
      hiddenNode.outE.push(edge);
      outputNode.inE.push(edge);
      edges.push(edge);
    }
  }

  const network = { inputLayer, hiddenLayer, outputLayer, edges }
  return network;
}

const trainNetwork = (network, trainingData, { maxWeight, maxError }) => {

  // For all trainingData, run the network and calculate the total error
  let errorForThisIteration;
  do {
    // Assign random weights to all edges
    for (let edge of network.edges) {
      edge.weight = randomWeight(maxWeight);
    }
    
    errorForThisIteration = 0;
    trainingData.forEach(({ input, output }) => {
      feedForward(network, input);
      const errorForThisTrainingData = network.outputLayer
        .map((outputNode, index) => {
          const actualOutput = outputNode.value;
          const targetOutput = output[index];
          const difference = actualOutput - targetOutput;
          return Math.pow(difference, 2);
        })
        .reduce((a, b) => a + b, 0);
      errorForThisIteration += errorForThisTrainingData;
    });
  } while (errorForThisIteration > maxError);
  console.log('errorForThisIteration: ', errorForThisIteration);
}

const getOutput = (network, input) => {
  feedForward(network, input);
  const outputValues = network.outputLayer.map(outputNode => outputNode.value);
  return outputValues;
}

module.exports = { createNetwork, getOutput, trainNetwork };