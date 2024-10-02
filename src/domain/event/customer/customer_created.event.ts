import EventInterface from "../@shared/event.interface";

export default class CustomerCreatedEvent implements EventInterface {
	payload: any;
	time: Date;
	private readonly name = "customer.created";

	constructor(payload: any) {
		this.payload = payload;
		this.time = new Date();
	}

	getName(): string {
		return this.name;
	}

}
