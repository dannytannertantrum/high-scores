# high-scores

A place to keep high score records on classic arcade games.

## Getting started

1. **Clone the repo:**
  ```
  $ git clone git@github.com:dannytannertantrum/high-scores.git
  ```
2. **Install packages.** In a terminal, change into the `api` directory and run `$ npm install`
3. **Start the API server.** In a terminal, change into the `api` directory and run `$ npm start`
4. Visit [http://localhost:7000/healthcheck](http://localhost:7000/healthcheck), which is the only endpoint currently returning anything. This will be updated in the future.

## Database
If this is the first time running the app, follow these steps:

1. **Install Postgresql.** [download and install here](https://www.postgresql.org/download/) if Postgres is not already installed.
2. **Open Postgres and start the server.**
3. **In a terminal, run the lines below one at a time.** This will create the database, add a new user, and assign `SUPERUSER` privileges to the new user.

```
$ psql
$ CREATE DATABASE high_scores;
$ CREATE USER glc;
$ ALTER USER glc WITH SUPERUSER;
```

[Reference](https://chartio.com/resources/tutorials/how-to-change-a-user-to-superuser-in-postgresql/)

**TODO:** Come back and create baseline files, shell scripts, etc.

## Running tests

Jest is our test runner. `jest.config.js` makes use of the `dotenv` package for loading environment variables in development. Each service contains a `tests` directory. To run all tests:
```
$ npm test
```
