import CustomerCreatedEvent from "../customer_created.event";
import EventHandlerInterface from "../../@shared/event_handler.interface";

export default class PrintLogWhenCustomerIsCreatedHandler2 implements EventHandlerInterface<CustomerCreatedEvent> {
	handle(event: CustomerCreatedEvent): void {
		console.log('Esse é o segundo console.log do evento: CustomerCreated');
	}
}
