const express = require('express')
const app = express()

app.get('/healthcheck', (reqest, response) => {
  response.send('GLC is the best')
})

module.exports = app
