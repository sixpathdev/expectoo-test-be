const { Sequelize, DataTypes } = require('sequelize')
const dbconnection = require('../config/connection')

const Book = dbconnection.define(
  'books',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    dbconnection,
    modelName: 'User',
  }
)

dbconnection
  .sync()
  .then(() => {
    console.log('Books table created successfully!')
  })
  .catch((error) => {
    console.error('Unable to create table : ', error)
  })

module.exports = Book