// basic express app
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const client = require('./db-client');

// routes
app.get('/api/neighborhoods', (req, res) => {
  client.query(`
    SELECT 
      n.id,
      n.name, 
      q.id as "quadrantId",
      q.name as quadrant
    FROM neighborhoods as n
    JOIN quadrants as q
    ON n.quadrant_id = q.id
    ORDER BY n.name;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/neighborhoods/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      quadrant_id as "quadrantId",
      population,
      founded,
      description
    FROM neighborhoods
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.post('/api/neighborhoods', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO neighborhoods (name, quadrant_id, population, founded, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.quadrantId, body.population, body.founded, body.description]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});

app.put('/api/neighborhoods/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update neighborhoods
    set
      name = $1,
      quadrant_id = $2,
      population = $3,
      founded = $4,
      description = $5
    where id = $6
    returning *;
  `,
  [body.name, body.quadrantId, body.population, body.founded, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/neighborhoods/:id', (req, res) => {
  client.query(`
    delete from neighborhoods where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/quadrants', (req, res) => {
  client.query(`
    SELECT *
    FROM quadrants;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

// start "listening" (run) the app (server)
const PORT = 3000;
app.listen(3000, () => console.log('app running on', PORT));