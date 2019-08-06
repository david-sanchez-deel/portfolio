/**
 * Server emits:
 * connect-to-room  --> Tells to the client connection is required
 * new-member       --> New member is in the room
 * member-removed   --> A member was removed from the room
 * start            --> Start the game, with the metadata injected to it
 * d
 */
const server = require('http').createServer();
const io = require('socket.io')(server);
const size = 600;
const columns = 40;
const squareSize = size/columns;
const rooms = {}

io.on('connection', client => {
  let roomName;
  client.emit('connect-to-room', {});
  client.on('connect-to-room', (data) => {
    if (!data || !data.room) {
      console.log('Error connecting to room', data);
      return;
    }
    roomName = data.room;
    if (!(roomName in rooms)) {
      rooms[roomName] = { scores: {}, fruit: null, players: {} };
      client.emit('owner');
    }
    if (client.id in rooms[roomName].players) {
      return;
    }
    if (Object.keys(rooms[roomName].players).length > 3) {
      client.disconnect(true);
      return;
    }
    const position = [];
    if (Object.keys(rooms[roomName].players).length === 0) {
      position.push(squareSize, squareSize);
    } else if (Object.keys(rooms[roomName].players).length === 1) {
      position.push(size - (squareSize*2), size - (squareSize*2));
    } else if (Object.keys(rooms[roomName].players).length === 2) {
      position.push(squareSize, size - (squareSize*2));
    } else if (Object.keys(rooms[roomName].players).length === 3) {
      position.push(size - (squareSize*2), squareSize);
    }
    rooms[roomName].players[client.id] = ({
      id: client.id,
      position,
      score: 0,
    });
    client.join(roomName, () => {
      console.log('Client', client.id, 'connected to', roomName)
      io.to(roomName).emit('new-member', Object.keys(rooms[roomName].players).length)
    });
  });
  client.on('start-room', () => {
    io.to(roomName).emit('start', { size, columns, squareSize });
    rooms[roomName].fruit = getRandomPosition();
    io.to(roomName).emit('fruit', rooms[roomName].fruit);
    setInterval(() => {
      for (const player of Object.values(rooms[roomName].players)) {
        if (!player.position) {
          continue;
        }
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
        if (rooms[roomName].fruit[0] === player.position[0] && rooms[roomName].fruit[1] === player.position[1]) {
          player.score = player.score + 1;
          rooms[roomName].fruit = getRandomPosition();
          console.log('Send position', rooms[roomName].fruit);
          io.to(roomName).emit('fruit', rooms[roomName].fruit, player.id);
        }
      }
      io.to(roomName).emit('tick', rooms[roomName].players)
    }, 100);
  });
  client.on('disconnect', () => {
    if (roomName) {
      delete rooms[roomName].players[client.id];
      io.to(roomName).emit('member-removed', rooms[roomName].players);
    }
  });
  client.on('move', (directionData) => {
    if (rooms[roomName].players[client.id]) {
      rooms[roomName].players[client.id].direction = directionData;
    }
  });
  client.on('die', () => {
    if (rooms[roomName].players[client.id]) {
      rooms[roomName].scores[client.id] = rooms[roomName].players[client.id].score;
      delete rooms[roomName].players[client.id];
      if (Object.keys(rooms[roomName].players).length === 1) {
        const winner = Object.keys(rooms[roomName].players)[0];
        console.log({ winner, score: rooms[roomName].players[winner].score,  data: rooms[roomName].scores });
        io.to(roomName).emit('winner', { winner, score: rooms[roomName].players[winner].score,  data: rooms[roomName].scores });
      }
    }
  });
});

server.listen(process.env.PORT || 8000);
function getRandomPosition() {
  /** f(x) = (rnd()(max - min)) + min --> [min, max] E R */
  const randomNumber = (min, max) => (Math.random() * (max - min)) + min
  /** g(x) = round(f(x)/dif)*dif */
  const randomPosition = (min, max) => Math.round(randomNumber(min, max)/min)*min;
  console.log();
  return [
    randomPosition(squareSize, size - (squareSize * 2)),
    randomPosition(squareSize, size - (squareSize * 2)),
  ]
}
