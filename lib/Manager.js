// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
const Employee = require("./Manager");
module.exports = class Manager extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub(){
      return this.github
  }
  getRole(){
      return "Manager"
  }
};