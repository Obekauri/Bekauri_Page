const express = require('express');
const { logger } = require('./middleware/middleware');
const server = express();
const usersRouter = require('./users/users-router');

// Fix: Call express.json() to parse JSON payloads
server.use(express.json());

// Middleware
server.use(logger);

// Users Router
server.use('/api/users', usersRouter);

// Catch-All 404 Handler
server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not found'
    });
});