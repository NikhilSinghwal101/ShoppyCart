const express = require('express')

const app = express()

const http = require('http').createServer(app)

const PORT = process.env.PORT || 4000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public')) // express middleware

app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/chat.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg) // broadcast means send msg to all which are connected except own
        // console.log(msg);
    })

})