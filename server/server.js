const express = require('express');
const axios = require('axios');
const cors = require('cors')

const server = express();
server.use(cors())

// Configure local server GET request with Axios
server.get('/', function(req, res) {
  axios.get('https://zcckehanmeng.zendesk.com/api/v2/requests.json', 
  { headers: {"Authorization" : 'Basic a2VoYW4ubWVuZ0B0YW11LmVkdS90b2tlbjo4TEtoRVJPQ0tObFE4ZWxDOHBGc2dpNml0VmdFcFUzOUdacU1VbGV2' }})
    .then(function(response) {
      //console.log(response.data.requests)
      console.log('Successfully called ZenDesk API...')
      res.send(response.data.requests)
    }).catch(function(error) {
      console.log(`Server Error! Status: ${error.response.status} Message: ${error.response.statusText}`)
      res.send(JSON.stringify(error.response.status))
    })
});

// Start the server
const PORT = 7000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));