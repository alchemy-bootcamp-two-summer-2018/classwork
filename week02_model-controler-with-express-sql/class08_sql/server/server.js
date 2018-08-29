// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
// TODO:

// routes
app.get('/api/neighborhoods', (req, res) => {

});

app.get('/api/neighborhoods/:id', (req, res) => {

  
});

app.post('/api/neighborhoods', (req, res) => {
  
});


// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));