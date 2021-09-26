const express = require('express');

const controller = require('./controllers')
const app = express();
app.use("/", express.static('public'))
app.use('/', controller);

app.listen(3000, () => {
  console.log('server started');
});