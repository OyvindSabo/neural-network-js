const runNetwork = require("./src/runNetwork");
const createNetwork = require("./src/network");
const { readArrayFromTextFile } = require("./src/dataUtils");

// Initialize network
const networkConfig = {
  inputLength: 100,
  hiddenLength: 50,
  outputLength: 1,
  inputFileName: "./data/weights.txt"
};
const network = createNetwork(networkConfig);

const formatNumber = (number, length = 6) => Number.parseFloat(number).toFixed(length).substring(0, length);

const waveHeightArray = readArrayFromTextFile("./data/waveHeights.txt");
console.log('┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐');
console.log('│                   │ Predicted value   │ Actual value      │ Error             │');
console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 999
let inputData = waveHeightArray.slice(889, 989);
let predictedValue = runNetwork(network, inputData);
let actualValue = waveHeightArray[999];
let error = Math.abs(predictedValue - actualValue);
let totalError = error;
console.log(`│ At t = 999        │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 1000
inputData = waveHeightArray.slice(890, 990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1000       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 1001
inputData = waveHeightArray.slice(891, 991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1001       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 4999
inputData = waveHeightArray.slice(4889, 4989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[4999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 4999       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 5000
inputData = waveHeightArray.slice(4890, 4990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[5000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 5000       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 5001
inputData = waveHeightArray.slice(4891, 4991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[5001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 5001       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 9999
inputData = waveHeightArray.slice(9889, 9989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[9999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 9999       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 10000
inputData = waveHeightArray.slice(9890, 9990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[10000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 10000      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 10001
inputData = waveHeightArray.slice(9891, 9991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[10001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 10001      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');
console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 14999
inputData = waveHeightArray.slice(14889, 14989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[14999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 14999      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 15000
inputData = waveHeightArray.slice(14890, 14990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[15000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 15000      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 15001
inputData = waveHeightArray.slice(14891, 14991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[15001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 15001      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 19999
inputData = waveHeightArray.slice(19889, 19989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[19999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 19999      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 20000
inputData = waveHeightArray.slice(19890, 19990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[20000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 20000      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 20001
inputData = waveHeightArray.slice(19891, 19991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[20001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 20001      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 24999
inputData = waveHeightArray.slice(24889, 24989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[24999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 24999      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 25000
inputData = waveHeightArray.slice(24890, 24990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[25000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 25000      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

// Generate demo data for t = 25001
inputData = waveHeightArray.slice(24891, 24991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[25001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 25001      │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');
console.log('totalError: ', totalError);