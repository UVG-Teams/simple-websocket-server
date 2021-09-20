// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
import WebSocket, { WebSocketServer } from 'ws';

// Simple websocket server
// This server acts like echo for all the connected clients

const wss = new WebSocketServer({ port: 8080 });
console.log('Server up');

wss.on('connection', function connection(ws) {

    ws.on('message', function incoming(message) {
        const messageData = JSON.parse(message);
        console.log('received: ', messageData);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(messageData));
            };
        });
    });

    ws.send(
        JSON.stringify({
            type: 'text',
            sent_by: 'WS Server',
            text: 'Connected successfully',
            sent_at: Date.now(),
        })
    );

});
