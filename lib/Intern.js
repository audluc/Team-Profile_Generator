// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
const Employee = require("./Employee");
module.exports = class Intern extends Employee {
  constructor(name, location, email, school) {
    super(name, location, email);
    this.school = school;
  }
  getSchool(){
      return this.school
  }
  getRole(){
      return "Intern"
  }
};