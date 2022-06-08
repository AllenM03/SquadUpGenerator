const Employee = require("./employee");
const inquirer = require('inquirer');
const fs = require('fs');
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    }

    getEmail() {
        return this.email;
        }

    getRole() {
    return 'Manager';
    };
}


module.exports = Manager;