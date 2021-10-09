const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Applications extends Model { }

Applications.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

    },
    {
        sequelize,
        tableName: "applications",
        timestamps: true,
    }

);

module.exports = Applications;
