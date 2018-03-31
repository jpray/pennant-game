export class Player {
  constructor(id) {
    this.id = id;
    this.points = 0;
    this.currentMoveResolve = null;
  }

  async playTurn(game) {
      return await this.getMove();
  }

  async getMove() {
    return new Promise((resolve) => {
      this.currentMoveResolve = resolve;
    })
  }

}
