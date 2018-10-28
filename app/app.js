
if (document.getElementById('Gender').value == "male") {
       console.log('The first test works!!');
}



var socket = io();

	socket.on('connect', () => {
	 console.log('BackEnd Logic Connected to Server');
	});

	socket.on('disconnect', () => {
		console.log('BackEnd LogicDisconnected from server');
	});