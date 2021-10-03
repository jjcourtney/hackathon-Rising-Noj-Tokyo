const Applications = require('./Applications');
const Recruiters = require('./Recruiters');
const Reviewers = require('./Reviewers');
const Users = require('./Users');



const codeData = [{
  id: 1, //number
  marked: true, //boolean
  code: "<html><p>something</p></html>", //string
  rating: 5 //number
}, {
  id: 2, //number
  marked: true, //boolean
  code: "const train = (arg) => arg", //string
  rating: 2 //number | null
}];

module.exports = { Applications, Recruiters, Reviewers, Users };