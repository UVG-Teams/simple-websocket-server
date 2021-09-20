// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
import WebSocket, { WebSocketServer } from 'ws';

// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Open the socket
socket.onopen = function(event) {

    // Send an initial message
    socket.send('I am example client and I\'m listening!');

    // Listen for messages
    socket.onmessage = function(event) {
        console.log('Client received a message: %s', event.data);
    };

    // Listen for socket closes
    socket.onclose = function(event) {
        console.log('Client notified socket has closed: ', event.data);
    };

    // To close the socket....
    socket.close()

};
