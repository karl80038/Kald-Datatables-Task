const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoConnect = require('./utilities/db').mongoConnect;
const employeeRoute = require('./routes/employeeRoute');
const app = express();

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use(employeeRoute);


app.use((req,res)=>{
    res.render('404.ejs', {pageTitle: "Page Not Found"});
});

mongoConnect(() => {
    app.listen(3000, ()=>{
        console.log('Server is running on Port 3000');
    });
});
