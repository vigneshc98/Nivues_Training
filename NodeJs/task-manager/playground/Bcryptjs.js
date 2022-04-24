const bcrypt = require('bcryptjs');

const myFunc = async () => {
    const password = 'vig134';
    const bcryptpassword = await bcrypt.hash(password, 8); //8 = how many times hashing algorithm is executed
     
    const isvalid = await bcrypt.compare(password, bcryptpassword);

    console.log(bcryptpassword);
    console.log(isvalid);
}

myFunc();