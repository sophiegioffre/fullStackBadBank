//Data Abstraction Layer

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

//connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
  console.log('Connected successfully to db server');

  //connect to badbankUsers database
  db = client.db('badbankUsers');
});

//create user account
const create = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const collection = db.collection('users');
    const doc = {name, email, password, balance: 0};
    collection.insertOne(doc, {w:1}, (err, result) => {
      err ? reject(err) : resolve(doc);
    });
  });
};

//all users
const all = () => {
  return new Promise((resolve, reject) => {
    const customers = db
      .collection('users')
      .find({})
      .toArray((err, docs) => {
        err ? reject(err) : resolve(docs);
      });
  });
};

module.exports = {create, all};