// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from '../src/App.js'

// ReactDOM.render(<App />, document.getElementById('root'));

var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)
const PORT = 3000

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected!')
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  })
})

http.listen(PORT, function () {
  console.log('listening on *' + PORT)
})