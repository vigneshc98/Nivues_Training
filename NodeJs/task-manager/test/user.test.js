const request = require('supertest');
const app = require('../src/app');

test('Should signUp a new user', async ()=>{
    await request(app).post('/users').send({
        name:"vig-test",
        email:"vig@gmail.com",
        password:"vig123456"
    }).expect(201)
});