/*
 * * Making A Cunstructor Function Of Employees And Add New Employees To A List
 */

    /*
    * * List Of Employees 
    */

    let listOfEmployees = [];

        /*
         * * Constructor Function For Employees
         */
        class Employee {
            constructor(name, jobTitle, salary, status = 'Full Time'){
            this.name = name
            this.jobTitle = jobTitle
            this.salary = salary
            this.status = status 
                listOfEmployees.push(this)
            }
            printEmployeeForm() {
                console.log(`First Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
            }
        };

            /*
             * * Contructing New Employees
             */

            new Employee('Jason', 'Engineer', '90,000/yr', 'Full Time');
            new Employee('Alex', 'Electrical Engineer', '120,000/yr', 'Full Time');
            new Employee('Jerald', 'Wearhouse', '15/hr', 'Part Time');

                /*
                 * * .printEmployeeForm Method
                 */

                // Employee.prototype.printEmployeeForm = function() {
                //     console.log(`First Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`)
                // };
                
                    /*
                     * * Loops to Console Log The .printEmployeeForm (Using For Loop and .forEach())
                     */
                    
                    /*
                     * * .forEach() 
                     */

                    listOfEmployees.forEach(listOfEmployees => listOfEmployees.printEmployeeForm());

                    /*
                     * * Regular For Loop 
                     */

                    for(let i = 0; i < listOfEmployees.length; i++){
                        listOfEmployees[i].printEmployeeForm()
                    };