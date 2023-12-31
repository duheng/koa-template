const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')
const List =  sequelize.define('list', {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'list'
})



module.exports = List