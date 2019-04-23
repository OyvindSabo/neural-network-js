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

module.exports = { createNetwork };