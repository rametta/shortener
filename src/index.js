const express = require('express')
const bodyParser = require('body-parser')
const shorten = require('./shorten')
const cors = require('cors')
const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use((err, req, res, next) => console.log(err))
app.use(cors())

app.post('/shorten', (req, res) => {
  const { url } = req.body
  if (!url) {
    res.status(400).send('Missing url body param')
    return
  }
  shorten(url)
    .then(({ data: { link } }) => res.send({ link }))
    .catch(() => res.status(500).send({ msg: 'Could not shorten url' }))
})

app.listen(port, () => console.log('Listening on port:', port))
