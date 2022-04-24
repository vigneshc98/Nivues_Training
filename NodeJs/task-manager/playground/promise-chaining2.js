require('../src/db/mongoose');
const Task = require('../src/model/task');

Task.findByIdAndDelete('625e9ca04063799b3612c817').then((user)=>{
    console.log(user);
    return Task.countDocuments({completed:false});
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})