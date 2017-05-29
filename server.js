// Heroku URL
// https://lit-sands-53696.herokuapp.com/

const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');
const helmet = require('helmet');

const app = express();
const root = path.join(__dirname, '/dist');

app.use(express.static(root));
app.use(helmet());
app.use(fallback('index.html', { root }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});