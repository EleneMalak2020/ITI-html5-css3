export default class User {
    #firstName;
    #lastName;
    #email;
    #phoneNumber;
    #street;
    #city;
    #country;
    #zipCode;

    constructor(firstName, lastName, email, phoneNumber, street, city, country, zipCode) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#street = street;
        this.#city = city;
        this.#country = country;
        this.#zipCode = zipCode;
    }


    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(value) {
        this.#phoneNumber = value;
    }

    get street() {
        return this.#street;
    }

    set street(value) {
        this.#street = value;
    }

    get city() {
        return this.#city;
    }

    set city(value) {
        this.#city = value;
    }

    get country() {
        return this.#country;
    }

    set country(value) {
        this.#country = value;
    }

    get zipCode() {
        return this.#zipCode;
    }

    set zipCode(value) {
        this.#zipCode = value;
    }

    // Get the user data as an object
    getUserObject() {
        return {
            firstName: this.#firstName,
            lastName: this.#lastName,
            email: this.#email,
            phoneNumber: this.#phoneNumber,
            street: this.#street,
            city: this.#city,
            country: this.#country,
            zipCode: this.#zipCode
        };
    }
}
