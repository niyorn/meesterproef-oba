var express = require('express')
var router = express.Router()
const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const HOST = process.env.HOST;

const baseUrl = 'https://zoeken.oba.nl/api/v1/';
const path = 'search'
const search = 'boeken';

var parseString = require('xml2js').parseString;


// define the home page route
router.get('/', function (req, res) {
    //render homepage

    fetch(baseUrl + path + '/?q=' + search + '&authorization=' + PUBLIC_KEY + '&refine=true')
        .then(res => {
            return res.text()
        })
        .then(body => {
            var xml = body;

            parseString(xml, (err, result) =>{
                let test = JSON.stringify(result)

                console.log(result)
                
                res.render('index',{
                    test: test
                })               
            })
           
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router