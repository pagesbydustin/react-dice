import { nanoid } from "nanoid";

export default class Game {
  constructor() {
    this.gameID;
    this.gameRound;
    this.gameStarted = false;
  }
  /**
   * set game id
   * @param {number} int
   */
  set gameID(int) {
    this.gameID = nanoid(16);
  }

  /** get game id */
  get gameID() {
    return this.gameID;
  }

  /**
   * set game round
   *
   * @param {number} round
   */
  set gameRound(round) {
    this.gameRound = round || 0;
  }

  /** get game round */
  get gameRound() {
    return this.gameRound;
  }
}
