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
class Server {
  constructor() {
    this.server = require('http').createServer();
    this.io = require('socket.io')(this.server);
    this.io.on('connection', this.handleConnection.bind(this));
    this.server.listen(process.env.PORT || 8000);
  }

  handleConnection(client) {
    const clientWrapper = new Client(client, this);
    client.on('connect-to-room', this.joinClientToRoom.bind(this, clientWrapper));
  }

  joinClientToRoom(client, username) {
    if (!this.lastRoom) {
      this.lastRoom = new Room(this);
    }
    while(!this.lastRoom.addPlayer(client, username)) {
      this.lastRoom.start();
      this.lastRoom = new Room(this);
    }
  }
}

new Server();
