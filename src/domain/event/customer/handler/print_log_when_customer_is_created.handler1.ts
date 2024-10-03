import CustomerCreatedEvent from "../customer_created.event";
import EventHandlerInterface from "../../@shared/event_handler.interface";

export default class PrintLogWhenCustomerIsCreatedHandler1 implements EventHandlerInterface<CustomerCreatedEvent> {
	handle(event: CustomerCreatedEvent): void {
		console.log('Esse é o primeiro console.log do evento: CustomerCreated');
	}
}
