const axios = require('axios')

// shorten :: String -> Promise
const shorten = (url) =>
  axios.post(
    'https://api-ssl.bitly.com/v4/shorten',
    {
      group_guid: 'Bi7ccDCFA6g',
      domain: 'bit.ly',
      long_url: url
    },
    {
      headers: {
        Authorization: process.env.AUTH,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  )

module.exports = shorten
