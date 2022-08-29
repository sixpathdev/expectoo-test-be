const Sequelize = require('sequelize')
const dbconnection =
  process.env.NODE_ENV !== 'production'
    ? new Sequelize('expectoo', 'root', '1smartcoded', {
        host: 'localhost',
        dialect: 'postgres',
      })
    : new Sequelize(
  'd9edm6j58p56l8',
  'ufhfrulnjgswuh',
  'b1ef7e66700819545980df0e08c3d5b25cdaf12d630bca22b77c92c5caf0e934',
  {
    host: 'ec2-52-3-200-138.compute-1.amazonaws.com',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false, // This line will fix new error
      },
    },
  }
)

module.exports = dbconnection
