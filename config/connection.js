const Sequelize = require('sequelize')
const dbconnection = new Sequelize('expectoo', 'root', '1smartcoded', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = dbconnection