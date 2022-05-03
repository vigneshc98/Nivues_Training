const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Task = require('../../src/model/task');
const User = require('../../src/model/user');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    _id:userOneId,
    name:"raj",
    email:"raj@gmail.com",
    password:"raj123456",
    tokens:[{
        token: jwt.sign({ _id:userOneId }, process.env.JWT_SECRET)
    }]
};
const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    _id:userTwoId,
    name:"vig",
    email:"vig@gmail.com",
    password:"vig123456",
    tokens:[{
        token: jwt.sign({ _id:userTwoId }, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    "description":"task one",
    "completed":false,
    "owner":userOneId
}
const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    "description":"task two",
    "completed":true,
    "owner":userOneId
}
const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    "description":"task three",
    "completed":true,
    "owner":userTwoId
}

const setUpDataBase = async () =>{
    await User.deleteMany();
    await Task.deleteMany();
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
    await new Task(taskThree).save();
}

module.exports={
    userOneId,
    userTwoId,
    userOne,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setUpDataBase
}