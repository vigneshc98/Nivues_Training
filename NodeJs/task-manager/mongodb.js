const {MongoClient,ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);                      // new ObjectId("625d1ac4ac36dfbc1d3fc278")
// console.log(id.getTimestamp());       // 2022-04-18T08:01:08.000Z
// console.log(id.id);                   // <Buffer 62 5d 1a c4 ac 36 df bc 1d 3f c2 78> -> raw binary data
// console.log(id.id.length);            // 12
// console.log(id.toHexString());        // converts to string representation: 625d1ac4ac36dfbc1d3fc278
// console.log(id.toHexString().length); // 24

MongoClient.connect(connectionURL,{useNewUrlParser:true}, (error,client)=>{
    if(error){
        return console.log('Unable to connect to db');
    }
    console.log('Connected successfully');

    const db = client.db(databaseName);

    //CRUD
    //----CREATE----
    // db.collection('users').insertOne({
    //    //_id:id,
    //     name:'hhh',
    //     age:23
    // },(error,result)=>{
    //     if(error){
    //         return console.log('unable to create user');
    //     }
    //     console.log(result); //{ acknowledged: true,insertedId: new ObjectId("625d0c73a789631e900c59cf") }
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description:'task one',
    //         completed:true
    //     },
    //     {
    //         description:'task two',
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to add tasks');
    //     }
    //     console.log(result);
    // })

    //-----READ-----
    // db.collection('users').findOne({_id: new ObjectId("625d09571ba23a7e2d1dcf75")},(error,user)=>{
    //     if(error){
    //         console.log('cant find the user');
    //     }
    //     console.log(user);
    // });

    // db.collection('users').find({age:23}).toArray((err,users)=>{
    //     console.log(users);
    // })
    // db.collection('users').find({age:23}).count((err,users)=>{
    //     console.log(users);
    // })

    //----UPDATE-----
    // db.collection('users').updateOne(
    //     {
    //         _id:new ObjectId("625d09571ba23a7e2d1dcf75")
    //     },
    //     {
    //         $set: {
    //             name:'vignesh'
    //         },
    //         $inc: {
    //             age: 1
    //         }
    //     }
    //     ).then((result)=>{
    //         console.log(result);
    //     }).catch((error)=>{
    //         console.log(error);
    //     });

    // db.collection('tasks').updateMany({
    //        completed:false
    // },
    // {
    //     $set: {
    //         completed:true
    //     }
    // }
    // ).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    //----DELETE----
    // db.collection('users').deleteMany({
    //     name:'hhh'
    // }
    // ).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    // db.collection('tasks').deleteOne({
    //     _id: new ObjectId("625d158145e44e7868a92c51")
    // }
    // ).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });
})
