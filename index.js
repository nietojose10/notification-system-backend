const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

app.use(cors());

app.use( express.static('public') );

app.use( express.json() );

//paths
app.use('/api/admin',);
app.use('/api/broadcast',);
app.use('/api/logHistory',);

