const express = require('express');
const routes = express.Router();
const baseController = require("./controllers/baseController")

routes.get('/estados', baseController.estados);
routes.get('/produtos', baseController.produtos);
routes.get('/', baseController.lista);


routes.get('/valores', baseController.dividas);

routes.get('/alo', baseController.ligacoes);
routes.get('/pp', baseController.promessas);
routes.get('/produtos', baseController.planos);
routes.get('/cpca', baseController.cpca);
routes.get('/total', baseController.totalvalores);
routes.get('/totalcpca', baseController.totalcpca);
routes.get('/totalpp', baseController.totalpp);
routes.get('/totalalo', baseController.ligacoes);
routes.get('/estado', baseController.estados);
routes.get('/estadosul', baseController.sul);
routes.get('/estadosudeste', baseController.sudeste);
routes.get('/estadosnorte', baseController.norte);
routes.get('/estadosnodeste', baseController.nordeste);
routes.get('/estadoscentrooeste', baseController.centrooeste);
routes.get('/planocontrole', baseController.plano1);
routes.get('/planopospuro', baseController.plano2);
routes.get('/planowttx', baseController.plano3);
routes.get('/planofixo', baseController.plano4);
routes.get('/planoold', baseController.plano5);
routes.get('/ligacaoum', baseController.ligacao1);
routes.get('/ligacaodois', baseController.ligacao2);
routes.get('/ligacaotres', baseController.ligacao3);




module.exports = routes