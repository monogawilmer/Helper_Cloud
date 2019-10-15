var express = require('express');
var morgan = require('morgan');
var cors = require('cors');
var path = require('path');
var mongoose = require('mongoose');
var router = require('express-promise-router');

//conexion a la base de datos MongoDB


mongoose.Promise=global.Promise;
const dbUrl = 'mongodb://localhost:27017/dbhelper';
mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true})
.then(mongoose => console.log('Conectando a la BD en el puerto 27017'))
.catch(err => console.log(err));



const app=express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router);
app.set('port', process.env.PORT || 3000);



app.listen(app.get('port'), ()=>{
    console.log('server on port '+ app.get('port'));
});