'use strict'

const fs = require('fs')

class Employee {
  constructor (name,title,salary) {
    this.name = name
    this.title = title
    this.salary = salary
  }

  promote(newTitle,newSalary){
    this.title = newTitle
    this.salary = newSalary
  }

  static parseFromFilePath(filePath){
    let file = fs.readFileSync(filePath)
    let empData = JSON.parse(file)
    let employee = new Employee(empData.name,empData.title,empData.salary)

    return employee
  }
}

module.exports = {
  Employee
}
