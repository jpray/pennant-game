export class Player {
  constructor(id) {
    this.id = id;
    this.points = 0;
  }

  async playTurn(game) {
      return await this.getMove();
  }

  async getMove() {
    
  }

}
