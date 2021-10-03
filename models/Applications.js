const { application } = require("express");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Applications extends Model { }

Applications.init(
    {
    }

);

module.exports = Applications;
