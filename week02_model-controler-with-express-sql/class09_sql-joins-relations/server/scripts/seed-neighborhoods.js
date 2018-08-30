const client = require('../db-client');
// okay to import "json", you will get JavaScript objects :)
const neighborhoods = require('./neighborhoods.json');

Promise.all(
  neighborhoods.map(hood => {
    return client.query(`
      INSERT into neighborhoods (
        quadrant_id, name, population, founded, description
      ) 
      SELECT
        id as quadrant_id,
        $1 as name,
        $2 as population,
        $3 as founded,
        $4 as description
      FROM quadrants
      WHERE direction = $5;
    `,
    [hood.name, hood.population, hood.founded, hood.description, hood.quadrant]
    );
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());