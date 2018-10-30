const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');




const publicPath = path.join(__dirname, '../public'); //efficient way to create file path
 
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New User Connected');

socket.emit('newSubmission', {   //welcome log for user to view
	for: 'Admin',
	text: 'Welcome to arefit'
});

socket.emit('Header', {   //answer to user query 
	header: 'Based on your selection, the following is recommended'
});

socket.emit('outPut', {   //answer to user query 
	YourAdvice: 'work out more'
});

socket.on('createSub', (newSubs) => {
	console.log('createSub', newSubs);
});

socket.on('disconnect', () => {
		console.log('User was Disconnected');
	});  
 	
});

server.listen(port, () => {
	console.log(`server is up on port ${port}`);
});








	