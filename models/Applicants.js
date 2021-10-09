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
