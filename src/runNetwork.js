const { feedForward } = require('./networkUtils');

const runNetwork = (network, input) => {
  feedForward(network, input);
  const outputValues = network.outputLayer.map(outputNode => outputNode.value);
  return outputValues;
}

module.exports = { runNetwork };