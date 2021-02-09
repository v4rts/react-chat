const express =  require("express");

const app = express();

const rooms = new Map();

app.get('/rooms', (req, res) => {
    res.json(rooms);
});

app.listen(8888, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server started')
});
