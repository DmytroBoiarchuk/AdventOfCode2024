const initialData = require("./initialData.js").initialData;

const parsedData = initialData
    .split("\n")
    .map((line) => line.split(" ").map((num) => +num));

const result = parsedData.map((line) => checkLine(line) || checkInvalidLine(line)).reduce((a, b) => a + b);

function checkLine(line) {
    const deltas = line.map((n, i) => n - line[i + 1]).slice(0, -1);
    return (
        deltas.every((n) => n > 0 && n < 4) || deltas.every((n) => n < 0 && n > -4)
    );
}

function checkInvalidLine(line) {
    let isValid = false;
    line.forEach((num, index) => {
        const resultingLine = line.filter((n, i) => i !== index);
        isValid = checkLine(resultingLine) || isValid;
    });
    return isValid;
}

console.log(result);