# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here.

<img src="https://github.com/Lala0419/snake-client/blob/master/assets/description(2).png" />

**Link to the server side:** [snek-multiplayer](https://github.com/lighthouse-labs/snek-multiplayer)


## Connecting To The Server

First, you need to add a function in play.js to connect to the server.

:point_right: Add a function called connect which sets up a connection and returns an object.

Paste the code below into your play.js file.

```
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: // IP address here,
    port: // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();
```
The game server automatically places your snake on the board as soon as you establish the connection. If you've set it up correctly, you should see your snake appear briefly on the server's game screen.

:point_right: Run play.js to ensure that you can see your snake on the screen.

You can terminate the app by pressing *`ctrl`* + *`c`* or wait for the server to kick you out due to idling. It only lets you idle without movement for a few seconds.


## Final Product

<img src="https://github.com/Lala0419/snake-client/blob/master/assets/snake-client(2).gif" />


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client using the `node play.js` command
