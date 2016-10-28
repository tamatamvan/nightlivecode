'use strict'

//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

//initializing express
const app = express();
const router = express.Router();

// ################### //
// APP configurations  //
// ##################  //

// urlencoded({ extended: true }) for getting data from
// html form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const data = require('./data.js');

// ################# //
//      ROUTING      //
// ################# //
router.get('/books', (req, res) => {
  res.send(data);
});

// ################# //
//  register router  //
// ################# //
app.use('/', router);

const hostname = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || '3000';

app.listen(port, hostname, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on ${hostname}:${port}`);
});
