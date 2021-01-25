const db = require('./config/db');
const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');

const app = express();

db();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(process.env.port || 5000, () => {
    console.log("listening...")
});
