const express = require('express');
const Fabrica = require('../models/FabricaModel');
const routerApi = express.Router();

const construir = new Fabrica();

routerApi.route('/crear')
  .get((req, res) => {
    res.json(construir.crear())
  });

routerApi.route('/mezclar')
  .get((req, res) => {   
    res.json(construir.mezclar())
  });

  routerApi.route('/pedir')
  .get((req, res) => {   
    res.json(construir.pedir())
  });


module.exports = routerApi;

