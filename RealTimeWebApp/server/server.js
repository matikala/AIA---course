const io = require("socket.io")
const server = io.listen(3000)

const users = {}

server.on('connection', (socket) => {

    socket.on('register-user', user => {
        if(user !== '' && user) {
            users[socket.id] = user
            server.emit('users', Object.values(users))
            socket.emit('registration complete')
        }
    })

    socket.on('message', message => { 
        server.emit('message', {user: users[socket.id], message: message})
    })

    socket.on('disconnect', () => {
        delete users[socket.id]
        server.emit('users', Object.values(users))
    })
})