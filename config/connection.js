const Sequelize = require('sequelize')
const dbconnection =
  process.env.NODE_ENV !== 'production'
    ? new Sequelize('expectoo', 'root', '1smartcoded', {
        host: 'localhost',
        dialect: 'postgres',
      })
    : new Sequelize(
        'postgres://ufhfrulnjgswuh:b1ef7e66700819545980df0e08c3d5b25cdaf12d630bca22b77c92c5caf0e934@ec2-52-3-200-138.compute-1.amazonaws.com:5432/d9edm6j58p56l8'
      )

// const dbconnection = new Sequelize(
//   'postgres://ufhfrulnjgswuh:b1ef7e66700819545980df0e08c3d5b25cdaf12d630bca22b77c92c5caf0e934@ec2-52-3-200-138.compute-1.amazonaws.com:5432/d9edm6j58p56l8'
// )

module.exports = dbconnection
