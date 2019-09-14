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
	text: 'Welcome!'
});

socket.emit('Header', {   //answer to user query 
	header: ':-: Thank you for using OurFit! Click on the logo to return home :-'
});

socket.emit('outPut', {   //answer to user query 
	YourAdvice: 'filler text'
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








	