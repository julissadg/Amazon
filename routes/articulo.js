var express = require('express');
var ArticuloController = require('../controllers/articulo');

var router = express.Router();

router.get('/home',ArticuloController.home);
router.post('/test',ArticuloController.test);
router.get('/articulo/:id?',ArticuloController.getArticulo);
router.get('/articulos',ArticuloController.getArticulos);
router.post('/save-articulo',ArticuloController.saveArticulo);
router.put('/articulo/:id',ArticuloController.updateArticulo);
router.delete('/articulo/:id',ArticuloController.deleteArticulo);

module.exports = router;