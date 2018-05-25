'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);
app.get('/api/cat',(req, res)=> {
  res.json(catArray[0]);
});
app.delete('/api/cat', (req, res)=> {
  catArray.shift();
  res.json(catArray[0]);
  console.log('You have adopted a cat!');
  res.status(204).end();
  //return 
});
app.get('/api/dog',(req,res)=> {
  res.json(dogArray[0]);
});
app.delete('/api/dog', (req,res)=> {
  dogArray.shift();
  res.json(dogArray[0]);
  console.log('You have adopted a dog!')
});
function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };
