'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();
let dogArray = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
}, {
  imageURL: 'https://www.dogmal.com/dog-photos/#bwg1/66',
  imageDescription: 'A chocolate pitbull with a spikey collar',
  name: 'Champ',
  sex: 'Male',
  age: 5,
  breed: 'Pitbull',
  story: 'Owner died'
}, {
  imageURL: 'https://www.indiamart.com/proddetail/spitz-dog-puppy-15509775091.html',
  imageDescription: 'A white fluffy puppy',
  name: 'Bunny',
  sex: 'Male',
  age: 1,
  breed: 'Spitz',
  story: 'Found on the side of the highway'
}];
let catArray = [{
  imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
  imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
}, {
  imageURL:'https://visualhunt.com/photo/201247/', 
  imageDescription: 'Siamese cat with blue eyes',
  name: 'Precious',
  sex: 'Female',
  age: 1,
  breed: 'Siamese',
  story: 'Found in abandoned house'
}, {
  imageURL:'https://visualhunt.com/photo/190693/', 
  imageDescription: 'Calico cat lounging on the sidewalk',
  name: 'Cutie',
  sex: 'Female',
  age: 8,
  breed: 'Calico',
  story: 'Found in abandoned house'
}
];
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
