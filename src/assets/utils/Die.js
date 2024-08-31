/**
 * Die class to help create a die as an object
 *
 * @export
 * @class Die
 * @typedef {Die}
 */
export class Die {
  /**
   * Creates an instance of Die.
   *
   * @constructor
   * @param {number} homeX - Home X coordinate of Die
   * @param {number} homeY - Home Y coordinate of Die
   * @param {boolean} isPowerDie - Power Die Boolean to help tell if this Die will be a power die with all pips
   * @param {number} [numberOfFive=0] - Defaults to 0 if isPowerDie is true or the number of param numberOfFive non power dice
   *
   */
  constructor(homeX, homeY, isPowerDie, numberOfFive) {
    this._homeX = homeX;
    this._homeY = homeY;
    this._powerDie = isPowerDie;
    this._dieID = isPowerDie ? 0 : numberOfFive;
  }

  /**
   * retuns object containing x and y coordinates for this die's home;
   *
   * @readonly
   * @type {{ x: number; y: number; }}
   */
  get homeCoords() {
    return { x: this._homeX, y: this._homeY };
  }

  /**
   * isPowerDie takes no paramiters and returns if the die is the power die
   *
   * @readonly
   * @type {boolean}
   */
  get isPowerDie() {
    return this._powerDie;
  }

  /**
   * ID takes no paramiters and returns the ID of the die
   *
   * @readonly
   * @type {number}
   */
  get ID() {
    return this._dieID;
  }
}
