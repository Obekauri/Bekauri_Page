const User = require('../users/users-model')

function logger(req, res, next) {
    console.log('logger is working')
    next();
}

async function validateUserId(req, res, next) {
    try {
        const user = await User.findById(req.params.id); // Assuming User has a `findById` method
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user; // Attach user to the request object for downstream use
        next();
    } catch (err) {
        next(err); // Pass errors to error-handling middleware
    }
}

function validateUser(req, res, next) {
    console.log('validateUser is working');
    next();
}



module.exports = {
    logger,
    validateUserId,
    validateUser,
    //validatePost
}