const { DataTypes } = require("sequelize");
const Sequelize = require('sequelize');
const db = require('../db');


const Base = db.define('base', {
    DATA:DataTypes.STRING,
    HORA:DataTypes.INTEGER,
    DIA:DataTypes.INTEGER,
    MES:DataTypes.INTEGER,
    UF:DataTypes.STRING,
    ESTADO:DataTypes.STRING,
    ALO:DataTypes.INTEGER,
    CPC:DataTypes.INTEGER,
    CPCA:DataTypes.INTEGER,
    PP:DataTypes.INTEGER,
    CLIENTE_NAO_ESTA:DataTypes.INTEGER,
    CLIENTE_NAO_VALIDOU:DataTypes.INTEGER,
    DESCONHECE:DataTypes.INTEGER,
    DESCONHECE_DIVIDA:DataTypes.INTEGER,
    FALECIDO:DataTypes.INTEGER,
    FONE_MUDO:DataTypes.INTEGER,
    LIG_PERDIDA:DataTypes.INTEGER,
    PREVENTIVO:DataTypes.INTEGER,
    RECADO:DataTypes.INTEGER,
    ALEGA:DataTypes.INTEGER,
    RETORNO_AGENDADO:DataTypes.INTEGER,
    DADOS_INVALIDOS:DataTypes.INTEGER,
    SEM_INTERESSE:DataTypes.INTEGER,
    NAO_TABULADA:DataTypes.INTEGER,
    RETORNO_INDIRETO:DataTypes.INTEGER,
    FRAUDE:DataTypes.INTEGER,
    OCUPADO:DataTypes.INTEGER,
    RECEPT:DataTypes.INTEGER,
    PROCESSO_JURIDICO:DataTypes.INTEGER,
    CONTESTACAO:DataTypes.INTEGER,
    VALOR:DataTypes.STRING,
    TIPO:DataTypes.STRING,
    PRODUTO:DataTypes.STRING,
});

Base.sync({ alter: true });

module.exports = Base;

