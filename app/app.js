


console.log('BackEnd Logic Connected');




var socket = io();

	socket.on('connect', () => {
	 console.log('BackEnd Logic Connected to Server');
	});

	socket.on('disconnect', () => {
		console.log('BackEnd LogicDisconnected from server');
	});