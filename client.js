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
		// 	setInterval(() => {
		// 		conn.write("Move: up");
		// 	}, 3000);
		// 	setInterval(() => {
		// 		conn.write("Move: right");
		// 	}, 4000);
		// 	setInterval(() => {
		// 		conn.write("Move: right");
		// 	}, 5000);
		// 	setInterval(() => {
		// 		conn.write("Move: right");
		// 	}, 6000);
		// 	setInterval(() => {
		// 		conn.write("Move: right");
		// 	}, 7000);
		// 	setInterval(() => {
		// 		conn.write("Move: down");
		// 	}, 8000);
		// 	setInterval(() => {
		// 		conn.write("Move: left");
		// 	}, 9000);
	});
	conn.on("data", (data) => {
		console.log("This is the data: ", data);
	});

	// interpret incoming data as text
	conn.setEncoding("utf8");

	return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
