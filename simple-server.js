const net = require('net');
const port = 6776 

const server = net.createServer((socket) => { // socket is actually a duplex stream.
    socket.on('data', (data) => {
        console.log(data.toString('utf-8'));
    }) 

})

server.listen(port, '127.0.0.1', () => {
    console.log('server opened on', server.address());
})