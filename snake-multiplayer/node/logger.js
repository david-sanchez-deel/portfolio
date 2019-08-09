module.exports = class Logger {
  constructor(context) {
    this.context = context;
  }

  log(...args) {
    console.log(
      `${new Date().toISOString()} ${
        this.context.padEnd('10')} ${args.map(e => JSON.stringify(e).padEnd('10')).join(' ')}`);
  }
}
