class Customer{

    firstName: String;
    lastName: String;


    constructor(first: String, last:String){
        this.firstName = first;
        this.lastName = last;
    }

    public getFirstName(): String {
        return this.firstName
    }

    public setFirstName(first: String): String {
        return this.firstName = first;
    }

    public getLastName(): String {
        return this.lastName
    }

    public setLastName(last: String): String {
        return this.lastName = last;
    }

}

let myCustomer  = new Customer("John", "Doe");
console.log(myCustomer.firstName);