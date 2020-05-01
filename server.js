const express = require('express')
const app = express()
const port = 5000
const http = require('http').createServer()
const io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })
})

http.listen(port)
console.log("running on port:" + port)