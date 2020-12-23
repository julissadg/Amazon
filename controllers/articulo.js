const articulo = require("../models/articulo");
var Articulo = require('../models/articulo');
var controller = {
    home : function(req,res){
        return res.status(200).send({
            message:'soy home'
        });
    },
test: function (req, res) {
    return res.status(200).send({
        message:"soy el metodo accion test"
    });
},
getArticulo: function (req,res) {
    var articuloId = req.params.id;

    if(articuloId == null) return res.status(404).send({message:'El articulo no existe'});

    articulo.findById(articuloId,(err, articulo)=>{
        if (err) return res.status(500).send({message:'Error al devolver datos'});

        if (!articulo) return res.status(404).send({message:'El articulo no existe'});

        return res.status(200).send({
            articulo
        });
    });
    
},

getArticulos: function(req,res) {
    articulo.find({}).exec((err,articulos)=>{
        if(err) return res.status(500).send({message:'Error al devolver los datos'});
        if(!articulos) return res.status(404).send({message:'No hay proyectos para mostrar'});

        return res.status(200).send({articulos});
    });

    
},


saveArticulo: function(req,res){
    var articulo = new Articulo();
    var params = req.body;
    articulo.nombre = params.nombre;
    articulo.costo = params.costo;
    articulo.categoria = params.categoria;

    articulo.save((err,articuloStored)=>{
        if(err)return res.status(500).send({message:'Error al guardar el articulo'});
        if(!articuloStored) return res.status(404).send({message:'No se ha podido guardar el articulo'});

        return res.status(200).send({articulo:articuloStored});
    });
   
},

updateArticulo: function(req, res){
    var articuloId = req.params.id;
    var update = req.body;

    Articulo.findByIdAndUpdate(articuloId,update,{new:true}, (err,articuloUpdated)=>{
        if(err)return res.status(500).send({message:'Error al actualizar'});

        if(!articuloUpdated)return res.status(404).send({message:'No existe el articulo'});

        return res.status(200).send({
            articulo:articuloUpdated
        });
    });
},

deleteArticulo: function(req, res){
    var articuloId = req.params.id;

    Articulo.findByIdAndRemove(articuloId,(err,articuloRemoved)=>{
        if(err) return res.status(500).send({message:'No se ha podido borrar el articulo'});
        if(!articuloRemoved) return res.status(404).send({message:'No se puede eliminar este articulo'});

        return res.status(200).send({
            articulo:articuloRemoved
        });
    });
}

};

module.exports= controller;