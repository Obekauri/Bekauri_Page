const express = require('express')

const {
    validateUsersId
} = require('../middleware/middleware')

const router = express.Router();