Proxy Server - Deployment
===

## Announcements, Review and Questions

* ?

## Environment Variables

1. Install `dotenv`:
    ```sh
    > npm i dotenv
    ```
1. **Add `.env` to `.gitignore`**
1. Create `.env` file at root of server project:
    ```sh
    PORT=3000
    SOME_API_KEY=1234
    DATABASE_URL=postgres://localhost:5432/eateries
    ```
1. Create `.env.example` file at root of server project:
    ```sh
    PORT=
    SOME_API_KEY=
    DATABASE_URL=
    ```
1. Require _as very first line_ of `server.js`, `create-tables.js`, `drop-tables.js` and `seed-data.js`:
    ```js
    require('dotenv').config()
    ```
1. Access via:
    ```js
    const PORT = process.env.PORT;
    ```
    ```js
    const DATABASE_URL = process.env.DATABASE_URL;
    ```

## API Proxy

Use APIs that don't allow CORS!

1. Install `superagent`:
    ```sh
    > npm i superagent
    ```
1. require:
    ```js
    const request = require('superagent');
    ```
1. Use to proxy requests:
    ```js
    app.get('/api/restaurants', (req, res, next) => {
      request.get(`${process.env.RESTAURANTS_API}/restaurant-inspections/`)
        .then(result => {
          res.send(result);
          // // you can also massage data:
          // res.send(result.body.results.map(rest => {
          //   return {
          //    address: rest.address,
          //    name: rest.name,
          //    inspectionNumber: rest.inspection_number
          //   };
          // }));
        })
        .catch(next);
    });

## Deployment

1. Two-repo solution
1. Create heroku account
1. Download nodejs tools
1. `heroku login`
1. In `server`:
    1. Create heroku project `heroku create`
    1. Add postgres db
    1. Run `db` scripts against prod db
    1. Add `engine` to `package.json`
1. Deploy:
    1. commit!
    1. `git push heroku master`
    1. `heroku open`
    1. Profit!