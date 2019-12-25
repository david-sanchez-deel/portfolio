let clientId = 0;

class Client {
  constructor(socket, server) {
    this.socket = socket;
    this.server = server;
    this.score = 0;
    this.id = clientId ++;
    this.position = null;
    this.username = null;
    this.inGame = false;
    this.direction = null;
    this.socket.on('move', this.move.bind(this));
  }

  move(direction) {
    this.direction = direction;
  }
  toSerialize() {
    return {
      position: this.position,
      score: this.score,
      id: this.socket.id,
      username: this.username,
    };
  }
}

module.exports = Client;
