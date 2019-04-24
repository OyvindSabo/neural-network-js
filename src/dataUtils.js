const fs = require("fs");

const readArrayFromTextFile = fileName => {
  const dataTextFile = fs.readFileSync(`${fileName}`, "utf8");
  const dataArray = dataTextFile.split("\n").map(e => parseFloat(e));
  return dataArray;
};

const writeArrayToTextFile = (dataArray, fileName) => {
  dataTextFile = dataArray.join("\n");
  fs.writeFileSync(`${fileName}`, dataTextFile);
};

const generateTrainingData = (
  fileName,
  {
    numberOfFirstValuesToSkip,
    amountOfDataToUseForTraining,
    inputLength,
    outputLength,
    distanceFromInputToOutput
  }
) => {
  const dataArray = readArrayFromTextFile(fileName);
  const trainingData = [];
  const trainingDataLength =
    amountOfDataToUseForTraining -
    numberOfFirstValuesToSkip -
    inputLength -
    distanceFromInputToOutput -
    outputLength;
  for (let i = 0; i < trainingDataLength; i++) {
    const inputStartIndex = numberOfFirstValuesToSkip + i;
    const inputEndIndex = inputStartIndex + inputLength;
    const outputStartIndex = inputEndIndex + distanceFromInputToOutput;
    const outputEndIndex = outputStartIndex + outputLength;
    trainingData.push({
      input: dataArray.slice(inputStartIndex, inputEndIndex),
      output: dataArray.slice(outputStartIndex, outputEndIndex)
    });
  }
  return trainingData;
};

module.exports = {
  readArrayFromTextFile,
  writeArrayToTextFile,
  generateTrainingData
};
