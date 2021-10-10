const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recruiters extends Model { }

Recruiters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: "recruiters",
        timestamps: true,
    }
);

module.exports = Recruiters;
