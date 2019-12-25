/**
 * Server emits:
 * connect-to-room  --> Tells to the client connection is required
 * new-member       --> New member is in the room
 * member-removed   --> A member was removed from the room
 * start            --> Start the game, with the metadata injected to it
 * d
 */
const Client = require('./client');
const Room = require('./room');
const Logger = require('./logger');
const logger = new Logger('Server');

class Server {
  constructor() {
    this.server = require('http').createServer();
    this.io = require('socket.io')(this.server);
    this.io.on('connection', this.handleConnection.bind(this));
    const port = process.env.PORT || 8000;
    this.server.listen(port);
    logger.log('Listening in ' + port);
  }


  handleConnection(client) {
    const clientWrapper = new Client(client, this);
    logger.log('Client connected', { id: clientWrapper.id });
    client.on('connect-to-room', this.joinClientToRoom.bind(this, clientWrapper));
  }

  joinClientToRoom(client, data) {
    if (!this.lastRoom) {
      this.lastRoom = new Room(this);
    }
    while(!this.lastRoom.addPlayer(client, data.username)) {
      this.lastRoom.start();
      this.lastRoom = new Room(this);
    }
  }
}

new Server();
