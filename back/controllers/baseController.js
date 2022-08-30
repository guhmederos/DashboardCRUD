const Base = require('../models/baseModel');
const sequelize = require('sequelize');
const { Op } = require("sequelize");
module.exports = {
        async estados(req, res){
            const base = await Base.findAll({
                attributes: ['estado']
            });
            return res.json(base);
        },
          
        async dividas(req, res){
            const valor = await Base.findAll({
                attributes: ['VALOR']
            });

            return res.json(valor)
        },
        async lista(req, res){
          const valor = await Base.findAll();

          return res.json(valor)
      },
        async produtos(req, res){
          const valor = await Base.findAll({
              attributes: ['PRODUTO']
          });

          return res.json(valor)
      },
        async ligacoes(req, res){
            const alo = await Base.findAll({
                attributes: ['ALO']
            });
            return res.json(alo)
        },
        async promessas(req, res){
            const pp = await Base.findAll({
                attributes: ['PP']
            });
            return res.json(pp)
        },
        async planos(req, res){
            const pacotes = await Base.findAll({
                attributes: ['PRODUTO']
            });
            return res.json(pacotes)
        },
        async cpca(req, res){
            const cpca = await Base.findAll({
                attributes: ['CPCA']
            });
            
            return res.json(cpca)
        },

        async totalvalores(req, res){
            const totaldividas = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('sum', sequelize.col('VALOR')), 'totalvalor']]
                }
              });

              return res.json(totaldividas)
        },

        async totalcpca(req, res){
            const totaldocpca = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('sum', sequelize.col('CPCA')), 'totalcpca']]
                }
              });

              return res.json(totaldocpca)
        },
        async totalpp(req, res){
            const totaldopp = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('sum', sequelize.col('PP')), 'totalpp']]
                }
              });

              return res.json(totaldopp)
        },
        async ligacoes(req, res){
            const ligacoes = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('sum', sequelize.col('DIA')), 'totaldia']]
                },
                where: {                 
                       DIA: 15                                   
              }
              });

              return res.json(ligacoes)
        },
        async estados(req, res){
            const estadoparana = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('estado')), 'estados']]
                }
              });

              return res.json(estadoparana)
        },
     
        async sul(req, res){
            const estadosdosul = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('UF')), 'estadossul']]
                },
                where: {                 
                    [Op.or]: [
                        { UF: "PR" },
                        { UF: "SC" },
                        { UF: "RS" }
                      ]                               
              }
              });

              return res.json(estadosdosul)
        },

        async sudeste(req, res){
            const estadosdosudeste = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('UF')), 'estadossudeste']]
                },
                where: {                 
                    [Op.or]: [
                        { UF: "ES" },
                        { UF: "MG" },
                        { UF: "RJ" },
                        { UF: "SP" }
                      ]                               
              }
              });

              return res.json(estadosdosudeste)
        },
        async norte(req, res){
            const estadosdonorte = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('UF')), 'estadosdonorte']]
                },
                where: {                 
                    [Op.or]: [
                        { UF: "AC" },
                        { UF: "AP" },
                        { UF: "AM" },
                        { UF: "PA" },
                        { UF: "RO" },
                        { UF: "RR" },
                        { UF: "TO" }
                      ]                               
              }
              });

              return res.json(estadosdonorte)
        },
        async nordeste(req, res){
            const estadosdonordeste = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('UF')), 'estadosdonordeste']]
                },
                where: {                 
                    [Op.or]: [
                        { UF: "AL" },
                        { UF: "BA" },
                        { UF: "CE" },
                        { UF: "MA" },
                        { UF: "PB" },
                        { UF: "PE" },
                        { UF: "PI" },
                        { UF: "RN" }
                      ]                               
              }
              });

              return res.json(estadosdonordeste)
        },
        async centrooeste(req, res){
            const estadosdocentrooeste = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('UF')), 'estadoscentrooeste']]
                },
                where: {                 
                    [Op.or]: [
                        { UF: "DF" },
                        { UF: "GO" },
                        { UF: "MT" },
                        { UF: "MS" }
                      ]                               
              }
              });

              return res.json(estadosdocentrooeste)
        },
        async plano1(req, res){
            const planoa = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('PRODUTO')), 'plano1']]
                },
                where: {                 
                    PRODUTO: "CONTROLE"                                   
           }
              });

              return res.json(planoa)
        },
        async plano2(req, res){
            const planob = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('PRODUTO')), 'plano2']]
                },
                where: {                 
                    PRODUTO: "POS_PURO"                                   
           }
              });

              return res.json(planob)
        },
        async plano3(req, res){
            const planoc = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('PRODUTO')), 'plano3']]
                },
                where: {                 
                    PRODUTO: "WTTX"                                   
           }
              });

              return res.json(planoc)
        },
        async plano4(req, res){
            const planod = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('PRODUTO')), 'plano4']]
                },
                where: {                 
                    PRODUTO: "FIXO"                                   
           }
              });

              return res.json(planod)
        },
        async plano5(req, res){
            const planoe = await Base.findAll({
                attributes: {
                  include:[
                  [sequelize.fn('count', sequelize.col('PRODUTO')), 'plano5']]
                },
                where: {                 
                    PRODUTO: "OLD"                                   
           }
              });

              return res.json(planoe)
        },
        async ligacao1(req, res){
          const ligacao = await Base.findAll({
              attributes: {
                include:[
                [sequelize.fn('count', sequelize.col('DIA')), 'ligacaoum']]
              },
              where: {                 
                [Op.or]: [
                  { DIA: 1 },
                  { DIA: 2 },
                  { DIA: 3 },
                  { DIA: 4 },
                ]                                 
         }
            });

            return res.json(ligacao)
      },
      
        async ligacao2(req, res){
          const ligacao = await Base.findAll({
              attributes: {
                include:[
                [sequelize.fn('count', sequelize.col('DIA')), 'ligacaodois']]
              },
              where: {                 
                [Op.or]: [
                  { DIA: 5 },
                  { DIA: 6 },
                  { DIA: 7 },
                  { DIA: 8 },
                  { DIA: 9 },
                  { DIA: 10 },
                ]                                 
         }
            });

            return res.json(ligacao)
      },
      async ligacao3(req, res){
        const ligacao = await Base.findAll({
            attributes: {
              include:[
              [sequelize.fn('count', sequelize.col('DIA')), 'ligacaotres']]
            },
            where: {                 
              [Op.or]: [
                { DIA: 11 },
                { DIA: 12 },
                { DIA: 13 },
                { DIA: 14 },
                { DIA: 15 },
               
              ]                                 
       }
          });

          return res.json(ligacao)
    },


        
};