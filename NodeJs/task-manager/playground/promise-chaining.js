require('../src/db/mongoose');
const User = require('../src/model/user');



User.findByIdAndUpdate('625e47ebf2d5f6cdf03ade7d',{age:30}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:30});
}).then((result)=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})