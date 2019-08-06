import constants from "./constants.js";
import Stage from "./stage.js";
var server = io.connect("http://jsancheze:8000");
console.log(server.id);
window.snake = {
  connect: function() {
    const room = document.getElementById("roomName").value;
    if (room) {
      server.emit("connect-to-room", { room });
    }
  },
  start: function() {
    server.emit("start-room");
  },
  server
};
let stage;
// Show connection information
server.on("connect-to-room", function() {
  document.getElementById("connecting").style.display = "none";
  document.getElementById("connectionInformation").style.display = "block";
});
server.on("new-member", data => {
  document.getElementById("participants").innerHTML =
    "There are " + data + " in the room";
});
server.on("owner", () => {
  document.getElementById("owner").style.display = "block";
});
server.on("start", ({ size, columns, squareSize }) => {
  constants.stage.size = size;
  constants.stage.columns = columns;
  constants.stage.squareSize = squareSize;
  document.getElementById("connectionInformation").style.display = "none";
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
  stage.update(data, server.id);
});
server.on("member-removed", data => {
  console.log("member-removed", data);
});
server.on("winner", ({ winner, score, data}) => {
  console.log(winner, score, data);
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
