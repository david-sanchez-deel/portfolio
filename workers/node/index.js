const fetch = require('node-fetch');
const { Worker } = require('worker_threads');

let data = [];
function loadData() {
  data = [];
  return fetch("https://data.cityofnewyork.us/api/views/25th-nujf/rows.json")
    .then(response => response.json())
    .then(response => response.data)
    .then(responseJSON => {
      for (let index = 0; index < 5; index ++) {
        data.push(...responseJSON);
      }
      console.log('Data was loaded');
    })
    .catch(() => console.log('Data can not be loaded, please check your connection'));
}

async function withoutReduce() {
  await loadData();
  const start = Date.now();
  let counter = data.reduce((previous, element) => (/[m]/i.test(element[11])) ? previous + 1 : previous, 0);
  console.log('Work finished with ' + counter + ' as result. In ' + (Date.now() - start) + ' ms');
}

async function mapReduce(nodesToCreate) {
  return new Promise(async (resolve) => {
    await loadData();
    const dataChunks = []
    const originalCount = data.length
    for (let index = 0; index < nodesToCreate; index ++) {
      dataChunks.push(data.splice(0, Math.floor(originalCount / nodesToCreate)));
    }
    const start = Date.now();
    for (let index = 0; index < nodesToCreate; index ++) {
      const worker = new Worker("./helper.js", { workerData: dataChunks[index] });
      worker.on('message', (e) => reducer("M", e.data));
    }

    const result = {};
    let nodeCounter = 0;
    function reducer(key, value) {
      if (result[key]) {
        result[key] = value + result[key];
      } else {
        result[key] = value;
      }
      nodeCounter++;
      if (nodeCounter == nodesToCreate) {
        console.log('Work finished with ' + result['M'] + ' as result. In ' + (Date.now() - start) + ' ms');
        resolve();
      }
    }
  });
}

(async () => {
    await withoutReduce();
    console.log('With 1 worker: ');
    await mapReduce(1);
    console.log('With 2 worker: ');
    await mapReduce(2);
    console.log('With 5 worker: ');
    await mapReduce(5);
    console.log('With 10 worker: ');
    await mapReduce(10);
    console.log('With 20 worker: ');
    await mapReduce(20);
})();
