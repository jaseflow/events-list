const express = require('express');
const cors = require('cors');

const app = express()
const port = 5000

const events = require('./resources/events.js');

app.use(cors());

app.get('/api/events', (req, res) => {
  res.status(200).send(events)
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
});

