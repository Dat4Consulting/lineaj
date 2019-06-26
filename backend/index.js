const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');
//const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});