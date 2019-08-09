import constants from "./constants.js";
import Stage from "./stage.js";
var server = io.connect("http://192.168.1.15:8000");
server.emit("connect-to-room", { username: Date.now() });
window.snake = { server };
let stage;
// Show connection information
server.on("new-member", data => {
  console.log('new-member');
  document.getElementById("participants").innerHTML =
    "There are " + data + " in the room";
});
server.on("start", ({ size, columns, squareSize }) => {
  console.log('start');
  constants.stage.size = size;
  constants.stage.columns = columns;
  constants.stage.squareSize = squareSize;
  document.createElement('app-stage');
  stage = new Stage();
  document.getElementById('game').appendChild(stage);
  // Move player
  window.addEventListener('keypress', (ev) => {
    const key = ev.key.toLowerCase();
    if (key === 'a') {
      return server.emit('move', 'left');
    }
    if (key === 'w') {
      return server.emit('move', 'up');
    }
    if (key === 'd') {
      return server.emit('move', 'right');
    }
    if (key === 's') {
      return server.emit('move', 'down');
    }
  });
});
server.on("tick", data => {
  if (stage) {
    stage.update(data, server.id);
  }
});
server.on("winner", ({ winner, score, data}) => {
  console.log('Winner', winner, score, data);
  if (winner === server.id) {
    alert('Congratulation!, You are the winner. Your score: ' + score);
  } else {
    alert('Try it again!, Winner score: ' + score +  ' Your score: ' + data[server.id]);
  }
  location.reload()
});
server.on("fruit", (data, id) => {
  stage.fruit(data, id);
});
server.on("increaseSize", () => {
  stage.player.increaseSize();
});
