const fs = require('fs');
const { createNetwork, getOutput, trainNetwork } = require('./network');

const waveHeights = fs.readFileSync(`${__dirname}/waveHeights.txt`, 'utf8');
const waveHeightArray = waveHeights.split('\n').map(e => parseFloat(e));
console.log(waveHeightArray.slice(0, 100));

const config = {
  // For creating the network
  inputLength: 100,
  hiddenLength: 100,
  outputLength: 1,
  // For training the network
  learningRate: 0.1, // 0.1 looks promising
  maxWeight: 0,
  maxError: 0.00001, // 0.000001 is probably the best even if it takes forever
};

const trainingData = [
  {input: waveHeightArray.slice(1000, 1100), output: [waveHeightArray[1110]]},
  {input: waveHeightArray.slice(1001, 1101), output: [waveHeightArray[1111]]},
  {input: waveHeightArray.slice(1002, 1102), output: [waveHeightArray[1112]]},
  {input: waveHeightArray.slice(1003, 1103), output: [waveHeightArray[1113]]},
  {input: waveHeightArray.slice(1004, 1104), output: [waveHeightArray[1114]]},
  {input: waveHeightArray.slice(1005, 1105), output: [waveHeightArray[1115]]},
  {input: waveHeightArray.slice(1006, 1106), output: [waveHeightArray[1116]]},
  {input: waveHeightArray.slice(1007, 1107), output: [waveHeightArray[1117]]},
  {input: waveHeightArray.slice(1008, 1108), output: [waveHeightArray[1118]]},
  {input: waveHeightArray.slice(1009, 1109), output: [waveHeightArray[1119]]},
  {input: waveHeightArray.slice(1010, 1110), output: [waveHeightArray[1120]]},
  {input: waveHeightArray.slice(1011, 1111), output: [waveHeightArray[1121]]},
  {input: waveHeightArray.slice(1012, 1112), output: [waveHeightArray[1122]]},
  {input: waveHeightArray.slice(1013, 1113), output: [waveHeightArray[1123]]},
  {input: waveHeightArray.slice(1014, 1114), output: [waveHeightArray[1124]]},
  {input: waveHeightArray.slice(1015, 1115), output: [waveHeightArray[1125]]},
  {input: waveHeightArray.slice(1016, 1116), output: [waveHeightArray[1126]]},
  {input: waveHeightArray.slice(1017, 1117), output: [waveHeightArray[1127]]},
  {input: waveHeightArray.slice(1018, 1118), output: [waveHeightArray[1128]]},
  {input: waveHeightArray.slice(1019, 1119), output: [waveHeightArray[1129]]},
];

const network = createNetwork(config);
//console.log('network before training: ', network);

trainNetwork(network, trainingData, config);
console.log('Let\'s predict the wave height at time 1130:');
console.log('We supply the wave heights from time 1020 to time 1120')
console.log('getOutput(network, waveHeightArray.slice(1020, 1120)): ', getOutput(network, waveHeightArray.slice(1020, 1120)));
console.log('');
console.log('The actual waveheight at time 1130: ', waveHeightArray[1130]);