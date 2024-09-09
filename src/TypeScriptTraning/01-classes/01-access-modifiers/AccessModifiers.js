"use strict";
class AccessModifiers {
    constructor(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let amf = new AccessModifiers("Kumar", 'Rahul');
console.log(amf.firstName);
console.log(amf.lastName);
