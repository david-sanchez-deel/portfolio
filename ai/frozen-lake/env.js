const LEFT = 0
const DOWN = 1
const RIGHT = 2
const UP = 3

const MAP = [
        "SFFF",
        "FHFH",
        "FFFH",
        "HFFG"
    ];

class FrozenLakeEnv {
  reset() {
    this.state = 0;
    return this;
  }

  step(action) {
    if (action == RIGHT) {
      if ((this.state + 1) % 4 == 0) {
        return this.return(0);
      }
      this.state += 1;
    } else if (action == DOWN) {
      if (this.state >= 13) {
        return this.return(0);
      }
      this.state += 4;
    } else if (action == LEFT) {
      if (this.state % 4 == 0) {
        return this.return(0);
      }
      this.state -= 1;
    } else if (action == UP) {
      if (this.state <= 3) {
        return this.return(0);
      }
      this.state -= 4;
    }

    if (this.state in [5, 7, 11, 12]) {
      return this.return(0, true);
    }
    if (this.state ==  15) {
      return this.return(1, true);
    }
    return this.return(0);
  }

  return(reward, done= false) {
    return [this.state, reward, done];
  }
}

var env = new FrozenLakeEnv();
