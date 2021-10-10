const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Jobs extends Model { }

Jobs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        salary: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            defaultValue: "£",
            allowNull: false,
        },
        jobs_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        tableName: "jobs",
        timestamps: true,
    }
);

module.exports = Jobs;
