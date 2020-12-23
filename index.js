// const express = require ('express');
// const app = express ();
// const xl = require('./readExcel');
// const path = require('path');
// const { request } = require('http');
// const { response } = require('express');


// var ArrayCatalogo =[];

// app.use(express.json());

// app.listen(3000,() =>{
//     console.log('El servidor eszta ini');
    
// })

// //Rutas
// app.get('/',(request,response) => {
//     response.sendFile(path.resolve(__dirname,'index.html'))
// })

// app.get('/catalogo',(request, response)=>{
//     response.sendFile(path.resolve(__dirname,'catalogo.html'))
// })

// app.get('/Almacen',(request, response)=>{
//     response.sendFile(path.resolve(__dirname,'almacen.html'))
// })

// app.get('/carrito',(request, response)=>{
//     response.sendFile(path.resolve(__dirname,'carrito.html'))
// })

// // servicios

// app.get('/verCatalogo',(request, response)=>{
//     var data = xl.data.readExcel('./Amazon.xlsx','catalogo');
// })

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/AmazonDB')
    .then(()=>{
        console.log("conexion a la base de datos exitosa");
        //creacion servidor
        app.listen(port, () =>{
            console.log("servidor corriendo correctamente");
        });
    })
    .catch(err => console.log(err));