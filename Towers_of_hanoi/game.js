class Game {

  constructor() {
    this.towers = [[3,2,1],[0],[]];
  }

  promptMove(reader, callback) {
    this.print();
    reader.question("From what tower: ", start => {
      const startTowerIdx = parseInt(start);

      reader.question("To what tower: ", end => {
        const endTowerIdx = parseInt(end);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  print() {
    console.log( JSON.stringify(this.towers));
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    const startTower = this.towers[startTowerIdx];
    const endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (
      startTower[startTower.length - 1] > endTower[endTower.length -1]
    ) { return false;
    } else { return true; }
  }

  move(startTowerIdx, endTowerIdx) {
    if (isValidMove(startTowerIdx, endTowerIdx)) {
      const startTower = this.towers[startTowerIdx];
      const endTower = this.towers[endTowerIdx];
      endTower.push(startTower.pop)
    } else {
      console.log("Invalid Move");
    }
  }

}

const g = new Game
g.isValidMove(1, 2);
g.isValidMove(1, 3);
g.isValidMove(2, 3);
