const express = require('express')
const Sequelize = require('sequelize')
const express = require('express')

const sequelize = new Sequelize('testdb', 'postgres', 'Manav2020#', {
  host: 'localhost',
  dialect: 'postgres',
})