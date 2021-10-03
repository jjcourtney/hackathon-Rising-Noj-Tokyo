const { application } = require("express");
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Reviewers extends Model { }

Reviewers.init(
    {
    }

);

module.exports = Reviewers;
