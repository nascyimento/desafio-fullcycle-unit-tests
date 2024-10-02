import EventInterface from "../@shared/event.interface";

export default class CustomerAddressChangedEvent implements EventInterface {
	time: Date;
	payload: any;
	readonly name = 'customer_address.changed';

	constructor(payload: any) {
		this.time = new Date();
		this.payload = payload;
	}

	getName(): string {
		return this.name;
	}
}
