const jwt = require('jsonwebtoken');

const MyFunc = async () =>{
    const token = jwt.sign({_id:'abc123'},'secretSignature',{expiresIn:'0 seconds'});
    console.log(token);

    const data = jwt.verify(token,'secretSignature' );
    console.log(data);
}
MyFunc();