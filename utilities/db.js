const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let connectionString = 'mongodb://localhost:27017/employeeDB'
let _db;

const mongoConnect = (cb) => {
    MongoClient.connect(connectionString, { useUnifiedTopology: true})
    .then(client => {
        console.log('connected');
        _db = client.db();
        cb();
    })
    .catch(error => {
        throw error;
    });
}

const getDb = () => {
    if(_db){
        return _db;
    }
    throw "No Database found.";
}