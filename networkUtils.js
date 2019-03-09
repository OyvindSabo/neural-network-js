const getHiddenLength = (inputLength, outputLength) =>
  Math.ceil((inputLength + outputLength) / 2);

const randomWeight = Math.random;

module.exports = { randomWeight };