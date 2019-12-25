/** Size of the stage */
const size = 600;
/** How many blocks will be allowed */
const columns = 40;
const squareSize = size/columns;
const Logger = require('./logger');
const logger = new Logger('Room');
let roomId = 1;
class Room {
  constructor(server) {
    this.id = roomId ++;
    logger.log(`Room ${this.id} created`);
    this.players = {}
    this.status = 'open';
    this.scores = {};
    this.fruit = null;
    this.server = server;
    this.id = new Date().getTime();
    this.io = server.io.to(this.id)
    this.createdAt = new Date();
    setTimeout(this.start.bind(this), 5000);
  }

  addPlayer(client, username) {
    if (client.inGame) {
      client.socket.join(client.room);
      logger.log('Client reconnected but is in a game. Joined again to the room');
      return true;
    }
    if (this.status !== 'open') {
      logger.log('Room is not opened');
      return false;
    }
    if (Object.keys(this.players) < 4) {
      client.inGame = true;
      client.room = this.id;
      client.username = username;
      client.position = this.getPositionOfPlayer(Object.keys(this.players).length),
        this.players[client.socket.id] = client;
      client.socket.join(this.id, this.playerJoined.bind(this, client));
      return true;
    }
    logger.log('Client rejected due unknown reason');
    return false;
  }

  playerJoined(client) {
    logger.log(`Client ${client.id} joined to room ${this.id}`);
    this.io.emit('new-member', Object.keys(this.players).length);
    client.socket.on('die', this.killPlayer.bind(this, client));
    client.socket.on('disconnect', this.killPlayer.bind(this, client));
  }

  getPositionOfPlayer(n) {
    if (n === 0) {
      return [squareSize, squareSize];
    } else if (n === 1) {
      return [size - (squareSize * 2), size - (squareSize * 2)];
    } else if (n === 2) {
      return [squareSize, size - (squareSize * 2)];
    } else if (n === 3) {
      return [size - (squareSize * 2), squareSize];
    }
  }

  start() {
    if (this.status !== 'open') {
      return;
    }
    this.status = 'game';
    console.log('Room', this.id, 'started', { size, columns, squareSize });
    this.io.emit('start', { size, columns, squareSize });
    this.emitNewFruit();
    this.updateInterval = setInterval(this.update.bind(this), 100);
  }

  emitNewFruit(eater) {
    this.fruit = this.getRandomPosition();
    console.log('Room', this.id, 'emit new fruit', this.fruit);
    this.io.emit('fruit', this.fruit, eater);
  }

  update() {
    for (const player of Object.values(this.players)) {
      switch (player.direction) {
        case 'up':
          player.position[1] -= squareSize;
          break;
        case 'down':
          player.position[1] += squareSize;
          break;
        case 'left':
          player.position[0] -= squareSize;
          break;
        case 'right':
          player.position[0] += squareSize;
          break;
      }
      if (this.fruit[0] === player.position[0] && this.fruit[1] === player.position[1]) {
        player.score = player.score + 1;
        this.emitNewFruit(player.socket.id);
      }
    }
    // console.log(this.id, Object.values(this.players).length)
    this.io.emit('tick', Object.values(this.players).map(e => e.toSerialize()));
  }

  killPlayer(client) {
    const clientId = client.socket.id;
    if (clientId in this.players) {
      console.log('Kill player', clientId);
      this.scores[clientId] = client.score;
      delete this.players[clientId];
      if (Object.keys(this.players).length <= 1) {
        return this.declareWinner(clientId);
      }
    }
  }

  declareWinner(deleted) {
    clearInterval(this.updateInterval);
    this.status = 'finished';
    const winnerId = Object.keys(this.players)[0];
    if (winnerId) {
      const winner =  this.players[winnerId];
      console.log('Room', this.id, 'has a winner', winner.username);
      this.io.emit('winner', { winnerId, score: winner.score, data: this.scores });
    } else {
      this.io.emit('winner', { winnerId: deleted, score: this.scores[deleted], data: this.scores });
    }
    this.server.io.in(this.id).clients((error, socketIds) => {
      socketIds.forEach(socketId => this.server.io.sockets.sockets[socketId].leave(this.id));
    });
  }

  getRandomPosition() {
    /** f(x) = (rnd()(max - min)) + min --> [min, max] E R */
    const randomNumber = (min, max) => (Math.random() * (max - min)) + min
    /** g(x) = round(f(x)/dif)*dif */
    const randomPosition = (min, max) => Math.round(randomNumber(min, max) / min) * min;
    console.log();
    return [
      randomPosition(squareSize, size - (squareSize * 2)),
      randomPosition(squareSize, size - (squareSize * 2)),
    ]
  }
}

module.exports = Room;
