const express = require('express');
const compression = require('compression');
const graphqlHTTP = require('express-graphql');
const app = express();
const port = process.env.PORT || 8000;

// const skillsApi = require('./app/api/skills');
const schema = require('./schema');

app.use(compression());

app.use('/api/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

// app.get('/api/skills', (req, res) => {
//   skillsApi.listAllSkills().then((skills) => {
//     res.send(skills);
//   });
// });

app.listen(port, () => {
  console.log('app listening on port %d', port);
});

module.exports = app;
