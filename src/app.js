const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnectionl = require('express-myconnection');

const app = express();


//importar rutas
const customerRoutes= require('./routes/customer');
const { urlencoded } = require('express');

//settings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnectionl(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'crudnodejsmysql2'
},'single'));
app.use(express.urlencoded({extended:true}));

//routes
app.use('/',customerRoutes);


//satic files 
app.use(express.static(path.join(__dirname,'public')));

//rmpezando servidor
app.listen(app.get('port'),() => {
    console.log('server on port 3000');
});