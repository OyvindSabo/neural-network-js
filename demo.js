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
console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 499
let inputData = waveHeightArray.slice(389, 489);
let predictedValue = runNetwork(network, inputData);
let actualValue = waveHeightArray[499];
let error = Math.abs(predictedValue - actualValue);
let totalError = error;
console.log(`│ At t = 499        │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 500
inputData = waveHeightArray.slice(390, 490);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[500];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 500        │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 501
inputData = waveHeightArray.slice(391, 491);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[501];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 501        │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 999
inputData = waveHeightArray.slice(889, 989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 999        │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 1000
inputData = waveHeightArray.slice(890, 990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1000       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 1001
inputData = waveHeightArray.slice(891, 991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1001       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 1499
inputData = waveHeightArray.slice(1389, 1489);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1499];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1499       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 1500
inputData = waveHeightArray.slice(1390, 1490);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1500];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1500       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 1501
inputData = waveHeightArray.slice(1391, 1491);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1501];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1501       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 1999
inputData = waveHeightArray.slice(1889, 1989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[1999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 1999       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 2000
inputData = waveHeightArray.slice(1890, 1990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2000       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 2001
inputData = waveHeightArray.slice(1891, 1991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2001       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 2499
inputData = waveHeightArray.slice(2389, 2489);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2499];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2499       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 2500
inputData = waveHeightArray.slice(2390, 2490);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2500];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2500       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 2501
inputData = waveHeightArray.slice(2391, 2491);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2501];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2501       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┝━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┿━━━━━━━━━━━━━━━━━━━┥');

// Generate demo data for t = 2999
inputData = waveHeightArray.slice(2889, 2989);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[2999];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 2999       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 3000
inputData = waveHeightArray.slice(2890, 2990);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[3000];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 3000       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('├───────────────────┼───────────────────┼───────────────────┼───────────────────┤');

// Generate demo data for t = 3001
inputData = waveHeightArray.slice(2891, 2991);
predictedValue = runNetwork(network, inputData);
actualValue = waveHeightArray[3001];
error = Math.abs(predictedValue - actualValue);
totalError += error;
console.log(`│ At t = 3001       │ ${formatNumber(predictedValue)}            │ ${formatNumber(actualValue)}            │ ${formatNumber(error)}            │`);

console.log('┕━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━┷━━━━━━━━━━━━━━━━━━━┙');
console.log('totalError: ', totalError);