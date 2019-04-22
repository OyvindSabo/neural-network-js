const fs = require("fs");

const generateTrainingData = (
  fileName,
  {
    amountOfDataToUseForTraining,
    inputLength,
    outputLength,
    distanceFromInputToOutput
  }
) => {
  const dataTextFile = fs.readFileSync(`${__dirname}/${fileName}`, "utf8");
  const dataArray = dataTextFile.split("\n").map(e => parseFloat(e));
  const trainingData = [];
  const trainingDataLength =
    amountOfDataToUseForTraining -
    inputLength -
    distanceFromInputToOutput -
    outputLength;
  for (let i = 0; i < trainingDataLength; i++) {
    const inputStartIndex = i;
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
  generateTrainingData
};
