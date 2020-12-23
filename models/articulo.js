var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticuloSchema = Schema({
    nombre : String,
    costo : Number,
    categoria : String

});
module. exports = mongoose.model('Articulo',ArticuloSchema);