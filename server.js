const db = require('./config/db');
const express = require('express');
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const expressPlayground = require("graphql-playground-middleware-express").default;

const app = express();

db();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen(process.env.port, () => {
    console.log("listening...")
});
