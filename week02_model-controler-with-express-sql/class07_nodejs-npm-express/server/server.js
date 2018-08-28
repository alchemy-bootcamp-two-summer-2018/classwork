// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();


app.get('/neighborhoods', (req, res) => {
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