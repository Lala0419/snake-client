const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: IP, // IP address here,
		port: PORT, // PORT number here,
	});
	conn.on("connect", () => {
		console.log("Successfully connected to game server");
		conn.write("Name: NM");
		conn.write("Say: GoGo");
	});
	conn.on("data", (data) => {
		console.log("This is the data: ", data);
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	return conn;
};

module.exports = { connect };
