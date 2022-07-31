export class Game {
  private _rolls: number[] = []
  private _currentRoll: number = 0;
  constructor(){}

  roll(pins: number) {
    this._rolls[this._currentRoll++] = pins;
  }

  score() {
    let score = 0; 
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._rolls[frameIndex] === 10) {
        score += 10 + this._rolls[frameIndex + 1] + this._rolls[frameIndex + 2];
        frameIndex++;
      } else if(this._rolls[frameIndex] + this._rolls[frameIndex + 1] === 10) {
        score += 10 + this._rolls[frameIndex + 2];
        frameIndex += 2; 
      } else {
        score += this._rolls[frameIndex] + this._rolls[frameIndex + 1];
        frameIndex += 2; 
      }
    }

    return score;
  }
}