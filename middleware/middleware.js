const User = require('../users/users-model')

function logger(req, res, next) {
    console.log('logger is working')
    next()
}