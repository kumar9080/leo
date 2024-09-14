"use strict";
class Customer {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(first) {
        return this.firstName = first;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(last) {
        return this.lastName = last;
    }
}
let myCustomer = new Customer("Kumar", 'Rahul');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
