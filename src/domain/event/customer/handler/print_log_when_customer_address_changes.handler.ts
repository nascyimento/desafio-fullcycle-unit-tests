import EventHandlerInterface from "../../@shared/event_handler.interface";
import CustomerAddressChangedEvent from "../customer_address_changed.event";
import Address from "../../../entity/address";

export default class PrintLogWhenCustomerAddressChangesHandler implements EventHandlerInterface<CustomerAddressChangedEvent> {
	handle(event: CustomerAddressChangedEvent): void {
		const { id, name, address } = event.payload;
		console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${(address as Address).toString()}`)
	}
}
