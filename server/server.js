const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public'); //efficient way to create file path
const publicPath2 = path.join(__dirname, '../app/app.js'); 
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
app.use(express.static(publicPath2));

io.on('connection', (socket) => {
   console.log('New User Connected');

socket.on('disconnect', () => {
		console.log('User was Disconnected');
	});  
 	
});

server.listen(port, () => {
	console.log(`server is up on port ${port}`);
});

