const DataTypes = require('sequelize/lib/data-types');
const Sequelize = require('sequelize');

const sequelize = new Sequelize("teste1","root", "lembrei1", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
     console.log("conexão com banco de dados realizada com sucesso")
}).catch(function(){
    console.log("erro: conexão com banco de dados não realizada com sucesso")
});

module.exports = sequelize;
