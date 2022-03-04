const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('user', {
    // id: {
    //   type: DataTypes.INTEGER
    // },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      unique: true
    },
    password: {
      type: DataTypes.STRING//(64),
      // validate: {
      //   is: /^[0-9a-f]{64}$/i
      // }
    },
    billing_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shipping_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  })
}
