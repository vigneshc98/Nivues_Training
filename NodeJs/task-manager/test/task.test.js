const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/model/task');
const {    userOneId, userTwoId, userOne, userTwo, taskOne, taskTwo, taskThree,setUpDataBase} = require('./fixtures/db');

beforeEach(setUpDataBase);

test('Should create task for user', async ()=>{
    const response = await request(app)
                           .post('/tasks')
                           .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
                           .send({
                               "description":"First test Task"
                           })
                           .expect(201);
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();
    expect(task.completed).toBe(false);
});

test('Should get task for user one', async ()=>{
    const response = await request(app)
                        .get('/tasks')
                        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
                        .send()
                        .expect(200);
    expect(response.body.length).toEqual(2);
});

test('Attempt to delete task of firstuser from second user', async ()=>{
    await request(app)
        .delete(`/tasks/${taskOne._id}`)
        .set('Authorization',`Bearer ${userTwo.tokens[0].token}`)
        .send()
        .expect(404);

    //Assert the task still in db
    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
})