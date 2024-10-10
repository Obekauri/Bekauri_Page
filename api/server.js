const express = require('express')
const appRouter = require('../app')

const server = express()

server.use('/', appRouter)

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = server