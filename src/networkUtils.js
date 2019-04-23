const sigmoid = x =>  1 / (1 + Math.pow(Math.E, -x));
const differentiatedSigmoid = x => sigmoid(x) * (1 - sigmoid(x));

const feedForward = (network, input, useNewWeights) => {
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
      hiddenNode.value += (useNewWeights ? inE.newWeight : inE.currentWeight) * inE.outV.value;
    });
    hiddenNode.value = sigmoid(hiddenNode.value);
  });

  // Calculate output layer values
  outputLayer.forEach(outputNode => {
    outputNode.value = 0;
    outputNode.inE.forEach(inE => {
      outputNode.value += (useNewWeights ? inE.newWeight : inE.currentWeight) * inE.outV.value;
    });
    //outputNode.value = sigmoid(outputNode.value);
  });
}

// Increases or decreases a number with a value between 0 and 1
const randomMutation = (weight, mutationFactor) => weight + (Math.random() - Math.random()) * mutationFactor;

const getError = (network, trainingData, useNewWeights) => {
  errorForThisIteration = 0;
    trainingData.forEach(({ input, output }) => {
      feedForward(network, input, useNewWeights);
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
  return errorForThisIteration;
}

const visualizeError = error => {
  console.log('visualizeError');
  let errorVisualization = '\n';
  errorVisualization += '10 000    1 000      100        10        1        0.1       0.01     0.001\n';
  errorVisualization += '┌─┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─┐\n';
  errorVisualization += '│';
  const xIndex = 41-10*Math.log10(error);
  for (let i = 0; i < xIndex; i++) {
    errorVisualization += ' ';
  }
  for (let i = 0; i < 72-xIndex; i++) {
    errorVisualization += '█';
  }
  errorVisualization += '│\n';
  errorVisualization += '└─────────────────────────────────────────────────────────────────────────┘';
  console.log(errorVisualization);
};

module.exports = { feedForward, getError, randomMutation, visualizeError };