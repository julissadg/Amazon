 var express = require('express');
 var bodyParser = require('body-parser');
 const path = require('path');
 var app = express();

 //cargar rutas
var articulo_routes = require('./routes/articulo');
app.get('/',(request,response) => {
   response.sendFile(path.resolve(__dirname,'index.html'))
 })
//middlewares
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());


 //rutas
 app.use('/api',articulo_routes);
 module.exports = app;