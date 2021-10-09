const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reviewers extends Model { }

Reviewers.init(
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
        tableName: "reviewers",
        timestamps: true,
    }
);

module.exports = Reviewers;
