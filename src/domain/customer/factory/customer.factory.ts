import Customer from "../entity/customer";
import Address from "../value-object/address";

export default class CustomerFactory {
	static create(id: string, name: string): Customer {
		return new Customer(id, name);
	}

	static createWithAddress(id: string, name: string, street: string, number: number, city: string, zip: string): Customer {
		const customer = new Customer(id, name);
		customer.address = new Address(street, number, city, zip);
		return customer
	}
}
