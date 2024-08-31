/**
 * Helper functions for many things with math and random numbers
 *
 * @export
 * @class Helper
 * @typedef {Helper}
 */
export default class Helper {
  /**
   * Getting a random number from min to max
   *
   * @param {number} min lowest possible number
   * @param {number} max hightest possible number
   * @returns {number} selected random number between min and max
   */
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Description placeholder
   *
   * @param {number} min lowest possible number should be a number value of 0 up to 10
   * @param {number} max hightest possible number value of 0 up to 10
   * @returns {number|undefined} selected random number between min and max times 100
   *
   */
  getNewXValue(min, max) {
    let rand = 0;
    min >= 0 && min <= 10 && max >= 0 && max <= 10
      ? (rand = this.getRandomNumber(min, max) * 100)
      : (rand = undefined);

    return rand;
  }

  getNewYValue(min, max) {
    let rand = 0;
    min >= 0 && min <= 10 && max >= 0 && max <= 10
      ? (rand = this.getRandomNumber(min, max) * 100)
      : (rand = undefined);

    return rand;
  }
}
