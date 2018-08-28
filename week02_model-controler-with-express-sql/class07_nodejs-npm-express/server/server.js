// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

// temp solution to updating data...
const fs = require('fs');
// path to data file:
const dataPath = 'data/neighborhoods.json';

// setup a "route":
// 1) HTTP METHOD, i.e. app.get === for GET requests
// 2) PATH, i.e. '/api/neighborhoods` === the requested path
app.get('/api/neighborhoods', (req, res) => {
  console.log(req.method, req.path);
  res.send([
    { name: 'name1' },
    { name: 'name2' },
    { name: 'name3' }
  ]);
});

// set the PORT on which to listen
const PORT = 3000;

// start "listening" (run) the app (server)
app.listen(PORT, () => console.log('app running...'));