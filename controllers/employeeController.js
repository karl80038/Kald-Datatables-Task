const Employee = require('../models/employee');
const employee = require('../models/employee');

exports.getEmployees = (req,res) => {
    employee.fetchAll()
    .then(employees => {
        res.render('index.ejs', {
            pageTitle: "Employees",
            data: employees,
            path: "/employees"
        });
    });
};

exports.getAddEmployee = (req,res) => {
    res.render('addEmployee.ejs', {
        pageTitle: "Add employee",
        path: "/getAddEmployee"
    })
};

exports.postAddEmployee = (req,res) => {
    const employee = new Employee(req.body.name, req.body.position, req.body.office, req.body.age, req.body.start_date, req.body.salary);
    employee.save()
    .then(result => {
        console.log("The entry was successfully saved.");
        res.redirect('/employees');
    })
    .catch(error =>{
        console.log("Couldn't save!");
        res.redirect('/employees');
    });
};