// const {MongoClient} =  require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'mydb';
// const client = new MongoClient(url);


// async function getData(){
//     let result  = await client.connect();
//     console.log('Connected successfully to server');
//     let db = result.db(database);
//     let collection  =  db.collection ('Employee');
//     let response =  await collection.find({}).toArray();
//     console.log(response);

// }

// getData();


const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'indexes';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    console.log('successfully connected to server');
    let db = result.db(database);
    let collection = db.collection('mylocal');
    let query = await collection.find({name:"samsung1"}).toArray();
    console.log(query);

}
getData();