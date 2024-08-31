var AccessModifiers = /** @class */ (function () {
    function AccessModifiers(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    AccessModifiers.prototype.getFirstName = function () {
        return this.firstName;
    };
    AccessModifiers.prototype.setFirstName = function (first) {
        return this.firstName = first;
    };
    AccessModifiers.prototype.getLastName = function () {
        return this.lastName;
    };
    AccessModifiers.prototype.setLastName = function (last) {
        return this.lastName = last;
    };
    return AccessModifiers;
}());
var accessModifiers = new AccessModifiers("Kumar", 'Rahul');
console.log(accessModifiers.firstName);
console.log(accessModifiers.lastName);
