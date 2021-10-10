const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Applicants extends Model { }

Applicants.init(
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
        tableName: "applicants",
        timestamps: true,
    }
);

module.exports = Applicants;

/**
 * Applicant
 * has many appications
 * is a user
 *
 */
