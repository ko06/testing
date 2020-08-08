const mongodb = require('mongodb');
const mongodbClient = mongodb.MongoClient;
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

mongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (err,client) => {
  if(err) {
    return console.log('unable connect Database, Sorry !!')
  }
  const db = client.db(databaseName)
  console.log('connection established successfully');

  // db.collection('Users').insertOne({
  //   name: 'selvaganapathi',
  //   age: 23
  // }, (err, result) => {
  //     console.log(result)
  // })

//   db.collection('Users').insertMany([{
//     name: 'selva',
//     age: 23
//   }, {
//     name: 'yogasam',
//     age: 23,
//   }], (err, result) => {
//       console.log(result.ops)
//   })
  

db.collection('Users').findOne({name:'selva'},(err, data)=>{
  console.log(data)
})
})

