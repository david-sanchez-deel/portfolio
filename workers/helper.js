self.addEventListener(
  "message",
  function (e) {
    let data = e.data;
    let counter = data.reduce((previous, element) => (/[mM]/.test(element[11])) ? previous + 1 : previous, 0);
    self.postMessage(counter);
    self.close();
  },
  false
);
