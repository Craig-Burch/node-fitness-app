const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


console.log('BackEnd Logic Connected');




var socket = io();

	socket.on('connect', () => {
	 console.log('BackEnd Logic Connected to Server');
	});

	socket.on('disconnect', () => {
		console.log('BackEnd LogicDisconnected from server');
	});