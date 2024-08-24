/* 
// Usage:
const helperInstance = new Helper();
const random = helperInstance.getRandomNumber(1,10)
}); */

export default class Helper {
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
