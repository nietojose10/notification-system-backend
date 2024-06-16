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
app.use('/api/auth', require('./routes/auth') );
// app.use('/api/admin',);
app.use('/api/broadcast', require('./routes/broadcast') );
app.use('/api/logHistory', require('./routes/logHistory') );

app.listen( process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});