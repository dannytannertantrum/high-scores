import express from 'express'
const app = express()

app.get('/healthcheck', (reqest, response) => {
  response.send('GLC is the best')
})

export default app
