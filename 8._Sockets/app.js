const app = require('express')();
const server =  require('http').createServer(app);

const io = require('socket.io')(server);

io.on('connection', socket => {
  //  console.log("Socket joined", socket.id);

  /*  socket.on('disconnect', () => {
        console.log("Socket left", socket.id);
    });*/

    socket.on("I'm thinking about this", ({thoughts}) => {
        // sends out to all the clients
        io.emit("Someone said", {thoughts});
    })
});

app.get("/", (req,res) => {
    return res.sendFile(__dirname + '/index.html');
})

server.listen(3000);