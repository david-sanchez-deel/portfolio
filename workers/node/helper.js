const { parentPort, workerData } = require('worker_threads');

const data = workerData;
let counter = data.reduce((previous, element) => (/[mM]/.test(element[11])) ? previous + 1 : previous, 0);
parentPort.postMessage(counter);

