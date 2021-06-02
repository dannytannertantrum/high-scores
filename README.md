# high-scores

A place to keep high score records on classic arcade games.

## Getting started

1. **Clone the repo:**
  ```
  $ git clone git@github.com:dannytannertantrum/high-scores.git
  ```
2. **Install packages.** Change into the `api` directory and run `$ npm install`
3. **Start the API server.** `cd` into the `api` directory and run `$ npm start`
4. Visit [http://localhost:7000/healthcheck](http://localhost:7000/healthcheck), which is the only endpoint currently returning anything. This will be updated in the future.

## Running tests

Jest is our test runner. `jest.config.js` makes use of the `dotenv` package for loading environment variables in development. Each service contains a `tests` directory. To run all tests:
```
$ npm test
```
