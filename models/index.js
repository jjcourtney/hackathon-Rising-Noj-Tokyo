export const Applications = require('./Applications');
export const Applicant = require('./Applicants')
export const Jobs = require('./Jobs')
export const Recruiters = require('./Recruiters');
export const Reviewers = require('./Reviewers');
export const Users = require('./Users');


Applicant.hasMany(Applications, {
  foreignKey: 'applicant_id',
  onDelete: 'CASCADE'
});

Applications.belongsTo(Applicant, {
  foreignKey: 'applicant_id'
});

Applications.hasMany(Applicant, {
  foreignKey: 'applicantion_id',
  onDelete: 'CASCADE'
});

Applicant.belongsTo(Applications, {
  foreignKey: 'applicantion_id'
});

Recruiters.hasOne(Users, {
  foreignKey: 'recruiters_id',
  onDelete: 'CASCADE'
});
Users.belongsTo(Recruiters, {
  foreignKey: 'recruiters_id'
});

Reviewers.hasOne(Users, {
  foreignKey: 'reviewers_id',
  onDelete: 'CASCADE'
});

Users.belongsTo(Reviewers, {
  foreignKey: 'reviewers_id'
});

Applicant.hasOne(Users, {
  foreignKey: 'applicant_id',
  onDelete: 'CASCADE'
});

Users.belongsTo(Applicant, {
  foreignKey: 'applicant_id'
});

Jobs.hasMany(Applications, {
  foreignKey: 'job_id',
  onDelete: 'CASCADE'
});

Applications.belongsTo(Jobs, {
  foreignKey: 'job_id'
});

/*
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
*/