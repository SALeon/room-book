const express = require('express');
const graphqlHTTP = require('express-graphql');
const env = require('../config/envSetting');
const schema = require('./qraphql/schema');
// eslint-disable-next-line
const mongoDB = require('../database/mongoDB/mongoDB');

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(env.PORT, () => console.log(`Running server at : ${env.PORT} port`));
