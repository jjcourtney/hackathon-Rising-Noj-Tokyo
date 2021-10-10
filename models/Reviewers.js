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
        tableName: "reviewers",
        timestamps: true,
    }
);

module.exports = Reviewers;
