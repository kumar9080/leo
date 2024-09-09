var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (first) {
        return this.firstName = first;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.setLastName = function (last) {
        return this.lastName = last;
    };
    return Customer;
}());
var myCustomer = new Customer("Kumar", 'Rahul');
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
