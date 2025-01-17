const User = require('../users/users-model')

function logger(req, res, next) {
    console.log('logger is working')
    next();
}

function validateUserId(req, res, next) {
    console.log('validateUserId is working')
    next();
}

function validateUser(req, res, next) {
    console.log('validateUser is working');
    next();
}