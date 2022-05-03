const request = require('supertest');
const app = require('../src/app');
const User = require('../src/model/user');
const {userOne,userOneId,setUpDataBase} = require('./fixtures/db');

beforeEach(setUpDataBase);

test('Should signUp a new user', async ()=>{
    const response = await request(app).post('/users').send({
        name:"vig-test",
        email:"vig-test@gmail.com",
        password:"vig123456"
    }).expect(201);

    //Assert that db was changed correctly
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();

    //Assertion about the response
    expect(response.body).toMatchObject({
        user:{
            name:"vig-test",
            email:"vig-test@gmail.com",
        },
        token: user.tokens[0].token
    });

    //to check password not stored as a plaintext
    expect(user.password).not.toBe('vig123456');
});

test('Should login existing user', async ()=>{
    const response = await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200);

    //validate new token is saved
    const user = await User.findById(response.body.user._id);
    expect(user).not.toBeNull();
    expect(response.body.token).toBe(user.tokens[1].token);
});

test('Shouldnot login non existent user', async ()=>{
    await request(app).post('/users/login').send({
        email:"dummy user",
        password:"dummy password"
    }).expect(400);
});

test('Should get profile for authenticated user', async ()=>{
    await request(app)
        .get('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
});

test('Should not get profile for unauthenticated user', async ()=>{
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
});

test('Shouldnot delete the account for user', async ()=>{
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
});

test('Should delete the account for user', async ()=>{
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
    
    //Assert user is null
    const user = await User.findById(response.body._id);
    expect(user).toBeNull();
});

test('Should upload a avatar image', async ()=>{
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .attach('avatar','test/fixtures/sample_robot.png')
        .expect(200);
    
    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));  
});

test('Should update valid user fields', async ()=>{
    await request(app)
        .patch('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send({
            name:"raju",
            email:"raju@gmail.com"
        })
        .expect(200);
    
    const user = await User.findById(userOneId);
    expect(user.name).toBe('raju')
});

test('Shouldnot update invaid user fileds', async ()=>{
    await request(app)
    .patch('/users/me')
    .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
    .send({
        name:"raju",
        email:"raju@gmail.com",
        location:"udupi"
    })
    .expect(400);
})

