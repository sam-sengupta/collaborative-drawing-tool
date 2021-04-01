console.log("My server is running!");

var express = require('express');
var app = express();


var port = process.env.PORT || 3000;
var server = app.listen(port);


app.use(express.static('public'));
var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
	console.log("new connection!!" + socket.id);
	socket.on('pattern', patternMsg);
	function patternMsg(data){
		socket.broadcast.emit('pattern', data);
	}
}

