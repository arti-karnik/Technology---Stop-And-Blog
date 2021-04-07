const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6],
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id',
          },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;
