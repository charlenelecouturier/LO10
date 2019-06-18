const express = require('express');
const Twitter = require('twit');
const app = express();
const cors = require('cors');
const routerModule= require('./router');


var corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));


app.use('/', routerModule);

app.listen(3000, () => console.log('Server running'))
