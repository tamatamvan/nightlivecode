'use strict'

//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initializing express
const app = express();
const router = app.Router();

// ################### //
// APP configurations  //
// ##################  //

// urlencoded({ extended: true }) for getting data from
// html form
app.use(bodyParser().urlencoded({ extended: true }));
app.use(bodyParser().json());
app.use(cors());

const data = require('./data.json');
