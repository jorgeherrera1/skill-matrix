const express = require('express');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 8000;

const skillsApi = require('./app/api/skills');

app.use(compression());

app.get('/api/skills', (req, res) => {
  skillsApi.listAllSkills().then((skills) => {
    res.send(skills);
  });
});

app.listen(port, () => {
  console.log('app listening on port %d', port);
});

module.exports = app;
