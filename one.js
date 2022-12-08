const { promises } = require("fs");

const readFile = async (filename) => {
    const contents = await promises.readFile(filename, "utf-8");

    const arr = contents.split(/\r?\n/);

    return arr;
};

const processFile = async (lines) => {
    const results = [];

    let step = 0;
    let total = 0;

    while (lines[step] !== undefined) {
        let convertedStep = Number(lines[step]);

        if (convertedStep !== 0) {
            total += convertedStep;
        }
        // I think this works?
        else {
            results.push(total);
            total = 0;
        }

        step++;
    }

    return results;
};

const getTopThreeSum = (totals) => {
    totals.sort((a, b) => {
        if (a > b) {
            return -1;
        } else if (a < b) {
            return 1;
        } else {
            return 0;
        }
    });

    let sumOfThree = totals[0] + totals[1] + totals[2];

    return sumOfThree;
};

const main = async () => {
    const lines = await readFile("./input.txt");
    const totals = await processFile(lines);

    const topThreeSum = getTopThreeSum(totals);
    console.log(topThreeSum);
};

main();
