const { application } = require("express");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recruiters extends Model { }

Recruiters.init(
    {
    }

);

module.exports = Recruiters;
