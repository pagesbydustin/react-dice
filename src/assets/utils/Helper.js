/* 
// Usage:
const helperInstance = new Helper({
  getRandom: () => true, // Your custom getRandom function
  findOptimalSize: (randomNumber) => randomNumber * 2, // Your custom findOptimalSize function
}); */

export default class Helper {
  constructor(options = {}) {
    this.getRandom =
      options.getRandom || this.generateRandomNumber(option.min, options.max);
    this.findOptimalSize = options.findOptimalSize;
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
