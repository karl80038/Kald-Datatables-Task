const { ObjectID } = require('bson');
const mongodb = require('mongodb');
const getDb = require('../utilities/db').getDb; 
class Employee {
    constructor(name, position, office, age, start_date, salary){
        this.name = name,
        this.position = position,
        this.office = office,
        this.age = age,
        this.start_date = start_date,
        this.salary = salary
    }

    save(){
        const db = getDb();
        let dbOperation;
        dbOperation = db.collection('employees').insertOne(this);
        return dbOperation.then(result => {
            console.log("success");
        })
        .catch(error=>{
            console.log(error);
            throw error;
        });
    }

    static delete(id){
        const db = getDb();
        let dbOperation;
        return dbOperation = db.collection('employees').deleteOne({_id: new mongodb.ObjectId(id)})
        .then(result => {
            console.log("success");
            return result;
        })
        .catch(error=>{
            console.log(error);
            throw error;
        });
    }

    static fetchAll() {
        const db = getDb();

        return db.collection('employees').find().toArray()
        .then(employees => {
            console.log(employees._id)
            return employees;
        })
        .catch(error => {
            console.log("Couldn't fetch all the products: " + error);
        });
    }
}
module.exports = Employee;
