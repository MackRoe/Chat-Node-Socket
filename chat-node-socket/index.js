const express = require('express')

const app = express()
const server = require('http').createServer(app)
const port = process.env.PORT || 3000

// import socket.io library
const io = require('socket.io')(server)

// import path
const path = require('path')
app.use(express.static(path.join(__dirname + '/public')))



// just to test the server
app.get('/', (req, res) => {
  res.status(200).send('Working');
})

io.on('connection', (socket) => {
    console.log('A User Connected');
    socket.on('chat', (message) => {
        io.emit('chat', message);
    });

  // listens for message from client
  socket.on('chat', message => {
    console.log('From client: ', message)
    io.emit('chat', message);
  })
  socket.on('disconnect', () => {
      console.log('user disconnected');
  });


});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
