const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Users extends Model { }

Users.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 8,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 8,
            }
        },
        cv_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        account_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        recruiter_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reviewer_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'reviewers',
                key: 'id',
            },
        },
        applicant_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'applicants',
                key: 'id',
            },
        },
        recruiters_id: {
            type: DataTypes.STRING,
            allowNull: true,
            references: {
                model: 'recruiters',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: true,
        hooks: {
            beforeCreate: async (newUser) => {
                newUser.password = await bcrypt.hash(newUser.password, 10)

                return newUser;
            },
            beforeUpdate: async updatedUser => {
                updatedUser.password = await bcrypt.hash(updatedUser.password, 10);

                return updatedUser;
            }
        }
    }

);

module.exports = Users;
