const db = require('./config/db');
const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(process.env.port, () => {
    console.log("listening...")
});

db();
