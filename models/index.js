export const Applications = require('./Applications');
export const Applicant = require('./Applicants')
export const Jobs = require('./Jobs')
export const Recruiters = require('./Recruiters');
export const Reviewers = require('./Reviewers');
export const Users = require('./Users');


/**
 * Applicant 
 * has many appications
 * is a user
 * 
 */



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
