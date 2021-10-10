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
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        applicant_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'applicants',
                key: 'id',
            },
        }, job_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'jobs',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: "applications",
        timestamps: true,
    }

);

module.exports = Applications;

/* job_id
* applicant_id
*/