const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoConnect = require('./utilities/db').mongoConnect;


app.use((req,res)=>{

});

mongoConnect(() => {
    app.listen(3000, ()=>{
        console.log('Server is running on Port 3000');
    });
});
