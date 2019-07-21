export class Customer {

    customerId: string;
    status: string;
    creationDateTime: string;
    name: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    phoneNumber: string;
    emailAddress: string;
    notes: Array<string>;

    getCustomerId() {
        return this.customerId;
    }

    setCustomerId(arg: string) {
        this.customerId = arg;
    }

    getStatus() {
        return this.status;
    }

    setStatus(arg: string) {
        this.status = arg;
    }

    getCreationDateTime() {
        return this.creationDateTime;
    }

    setCreationDateTime(arg: string) {
        this.creationDateTime = arg;
    }

    getName() {
        return this.name;
    }

    setName(arg: string) {
        this.name = arg;
    }

    getStreet() {
        return this.street;
    }

    setStreet(arg: string) {
        this.street = arg;
    }

    getCity() {
        return this.city;
    }

    setCity(arg: string) {
        this.city = arg;
    }

    getState() {
        return this.state;
    }

    setState(arg: string) {
        this.state = arg;
    }

    getPostalCode() {
        return this.postalCode;
    }

    setPostalCode(arg: string) {
        this.postalCode = arg;
    }

    getCountry() {
        return this.country;
    }

    setCountry(arg: string) {
        this.country = arg;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(arg: string) {
        this.phoneNumber = arg;
    }

    getEmailAddress() {
        return this.emailAddress;
    }

    setEmailAddress(arg: string) {
        this.emailAddress = arg;
    }

    getNotes() {
        return this.notes;
    }

    setNotes(arg: Array<string>) {
        this.notes = arg;
    }

    addNotes(arg: string) {
        this.notes.concat(arg);
    }
}
