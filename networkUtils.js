const sigmoid = x =>  1 / (1 + Math.pow(Math.E, -x));
const differentiatedSigmoid = x => sigmoid(x) * (1 - sigmoid(x));

const feedForward = (network, input) => {
  const { inputLayer, hiddenLayer, outputLayer } = network;
  if (input.length !== inputLayer.length) {
    console.log('ERROR: Length of input data is not equal to length of input layer');
  }
  
  // Set input layer values
  inputLayer.forEach((inputNode, index) => {
    inputNode.value = input[index];
  });
  
  // Calculate hidden layer values
  hiddenLayer.forEach(hiddenNode => {
    hiddenNode.value = 0;
    hiddenNode.inE.forEach(inE => {
      hiddenNode.value += inE.weight * inE.outV.value;
    });
    hiddenNode.value = sigmoid(hiddenNode.value);
  });

  // Calculate output layer values
  outputLayer.forEach(outputNode => {
    outputNode.value = 0;
    outputNode.inE.forEach(inE => {
      outputNode.value += inE.weight * inE.outV.value;
    });
    outputNode.value = sigmoid(outputNode.value);
  });
}

const getHiddenLength = (inputLength, outputLength) =>
  Math.ceil((inputLength + outputLength) / 2);

// Generates a random number between -1 and 1
const randomWeight = (maxWeight) => (Math.random() - Math.random()) * maxWeight;

const toOneOrZero = array => array.map(element => element >= 0.5 ? 1 : 0);

module.exports = { feedForward, randomWeight, toOneOrZero };