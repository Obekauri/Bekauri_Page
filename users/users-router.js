const express = require('express')

const {
    validateUsersId
} = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res) => {
    
})

router.get('/:id', validateUsersId, (req, res) => {

})