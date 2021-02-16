const express =  require('express');

const app = express(); /* create express app */
const server = require('http').Server(app); /* Set expressapp for http server */
const io = require('socket.io')(server,{

    cors: {

        origin: '*',
        methods: ["GET", "POST"],
        credentials: true,
        transports: ['websocket']

    }

}); /* add socket to server */

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    console.log("hello world");
})

io.on('connection', socket => { /* Connection testing */
    console.log("user connected", socket.client.conn.id);
})

server.listen(8888, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
});
