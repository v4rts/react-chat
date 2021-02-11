const express =  require('express');
const app = express();
const server = require('http').Server(app); /* Set expressapp for server */
const io = require('socket.io')(server,{

    cors: {

        origin: '*',
        methods: ["GET", "POST"],
        credentials: true,
        transports: ['websocket']

    }

});
/*const webSocket = io(server);*/

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => { /* Connection testing */
    console.log("user connected", socket)
})

server.listen(8888, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
});
