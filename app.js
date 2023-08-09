const express = require('express');
const app = express();
require('./config/db'); 

const mainRouter = require('./routes');
app.use(mainRouter);

module.exports = app;