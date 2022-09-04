const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getHome)
router.post('/q', indexController.getSearch)

module.exports = router