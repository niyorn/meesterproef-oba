
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    //render homepage

    res.render('index')
})

module.exports = router