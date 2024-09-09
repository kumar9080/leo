class Customer{

    firstName: String ;
    lastName: String;


    constructor(first: String, last: String){
        this.firstName = first;
        this.lastName = last;
    }

    public getFirstName() {
        return this.firstName;
    }
    
    public setFirstName(first: String) {
        return this.firstName = first;
    }


    public getLastName() {
        return this.lastName;
    }
    
    public setLastName(last: String) {
        return this.lastName = last;
    }
}

let myCustomer = new Customer("Kumar",'Rahul')
console.log(myCustomer.firstName)
console.log(myCustomer.lastName)