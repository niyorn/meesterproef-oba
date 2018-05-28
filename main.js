const express = require('express')
    app = express ();
const router = require('./routes/routes')
const port = 4000;

app
    .use(express.static('views'))
    .use(express.static('public'))
    .set('view engine', 'ejs')

app.use('/', router)

app.listen(port, function () {
    console.log('open at localhost:' + port)
})