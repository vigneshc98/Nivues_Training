const express = require('express');
require('./db/mongoose'); //mongoose connect to the database.
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

//registering with express application
app.use(express.json()); 
app.use(userRouter);
app.use(taskRouter);

app.listen(port, ()=>{
    console.log('server started on port ',port);
});

// const User = require('./model/user');
// const Task = require('./model/task');

// const main = async () => {
//     const task = await Task.findById('62613dfda30968f169dd602e');
//     await task.populate('owner');
//     console.log(task.owner);

//     const user = await User.findById('62613d298ff0929a97799bc9');
//     await user.populate('tasks');
//     console.log(user.tasks);
// }
// main();
