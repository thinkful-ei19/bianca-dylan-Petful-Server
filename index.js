'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {petQueue, catQueue, dogQueue} = require('./petQueue');

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
   res.json(catQueue.peek());
});
app.delete('/api/cat', (req, res)=> {
  catQueue.dequeue();
  res.json(catQueue.peek());
  console.log('You have adopted a cat!');
  res.status(204).end();
  //return 
});
app.get('/api/dog',(req,res)=> {
  res.json(dogQueue.peek());
});
app.delete('/api/dog', (req,res)=> {
  dogQueue.dequeue();
  res.json(dogQueue.peek());
  console.log('You have adopted a dog!')
  res.status(204).end();
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
