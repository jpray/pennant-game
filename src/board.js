export class Board {
  constructor() {
    this.grid = Array(5).map(() => {
      return Array(5).map(() => {
        return new Cell();
      })
    })
    this.grid.fill(5);
    this
  }
}
