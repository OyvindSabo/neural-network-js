const { randomWeight } = require('./networkUtils');

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

const feedForward = (network, input) => {
  const { inputLayer, hiddenLayer, outputLayer } = network;
  if (input.length !== inputLayer.length) {
    console.log('ERROR: Length of input data is not equal to length of input layer');
  }
  
  // Set input layer values
  inputLayer.forEach((inputNode, index) => {
    inputNode.value = input[index];
  })
  
  // Calculate hidden layer values
  hiddenLayer.forEach(hiddenNode => {
    hiddenNode.value = 0;
    hiddenNode.inE.forEach(inE => {
      hiddenNode.value += inE.weight * inE.outV.value;
    })
  })

  // Calculate output layer values
  outputLayer.forEach(outputNode => {
    outputNode.value = 0;
    outputNode.inE.forEach(inE => {
      outputNode.value += inE.weight * inE.outV.value;
    })
  })
}

const getOutput = (network, input) => {
  feedForward(network, input);
  return network.outputLayer.map(outputNode => outputNode.value);
}

const trainNetwork = (network, trainingData, iterations) => {
  
  // Assign random weights to all edges
  for (let edge of network.edges) {
    edge.weight = randomWeight();
  }

  // For all trainingData, run the network and calculate the total error
}

module.exports = { createNetwork, getOutput, trainNetwork };