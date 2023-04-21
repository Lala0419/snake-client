const net = require("net");

// establishes a connection with the game server
const connect = function () {
	const conn = net.createConnection({
		host: "10.0.2.15", // IP address here,
		port: 50541, // PORT number here,
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
