const express = require('express');
require('./db/mongoose'); //mongoose connect to the database.
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

//registering with express application
app.use(express.json()); 
app.use(userRouter);
app.use(taskRouter);

module.exports= app;



