const express = require('express')

const {
    validateUsersId
} = require('../middleware/middleware')

const router = express.Router();

router.get('/', (req, res) => {

})

router.get('/:id', validateUsersId, (req, res) => {

})

router.post('/', (req, res) => {

})

router.put('/:id', validateUsersId, (req, res) => {

})

router.delete('/:id', validateUsersId, (req, res) => {

})

router.get('/:id/posts', validateUsersId, (req, res) => {
    
})