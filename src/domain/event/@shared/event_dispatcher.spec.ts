import EventDispatcher from "./event_dispatcher";
import ProductCreatedEvent from "../product/product_created.event";
import PrintLogWhenCustomerIsCreatedHandler1 from "../customer/handler/print_log_when_customer_is_created.handler1";
import PrintLogWhenCustomerIsCreatedHandler2 from "../customer/handler/print_log_when_customer_is_created.handler2";
import Customer from "../../entity/customer";
import CustomerCreatedEvent from "../customer/customer_created.event";
import SendEmailWhenProductIsCreatedHandler from "../product/handler/send_email_when_product_is_created.handler";
import PrintLogWhenCustomerAddressChangesHandler
	from "../customer/handler/print_log_when_customer_address_changes.handler";
import Address from "../../entity/address";
import CustomerAddressChangedEvent from "../customer/customer_address_changed.event";

describe("Domain Event unit tests", () => {

	const eventDispatcher = new EventDispatcher();
	beforeEach(() => {
		eventDispatcher.unregisterAll();
	});

	it("should register event handlers", () => {
		const eventHandler = new SendEmailWhenProductIsCreatedHandler();

		eventDispatcher.register("product.created", eventHandler);

		expect(eventDispatcher.getHandlers("product.created")).toEqual([eventHandler]);
	});

	it("should unregister event handlers", () => {
		const eventHandler = new SendEmailWhenProductIsCreatedHandler();

		eventDispatcher.register("product.created", eventHandler);
		eventDispatcher.unregister("product.created", eventHandler);

		expect(eventDispatcher.getHandlers("product.created")).toEqual([]);
	});

	it("should unregister all event handlers", () => {
		const eventHandler = new SendEmailWhenProductIsCreatedHandler();

		eventDispatcher.register("product.created", eventHandler);
		eventDispatcher.unregisterAll();

		expect(eventDispatcher.getHandlers("product.created")).toBeUndefined()
	});

	it("should dispatch product.created event", () => {
		const eventHandler = new SendEmailWhenProductIsCreatedHandler();
		const event = new ProductCreatedEvent({
			name: "Product 1",
			price: 100
		});
		const spyEventHandler = jest.spyOn(eventHandler, "handle");

		eventDispatcher.register("product.created", eventHandler);
		eventDispatcher.dispatch(event);

		expect(spyEventHandler).toHaveBeenCalledWith(event);
	});

	it("should dispatch customer.created event", () => {
		const eventHandler1 = new PrintLogWhenCustomerIsCreatedHandler1
		const eventHandler2 = new PrintLogWhenCustomerIsCreatedHandler2
		const customer = new Customer("c1", "John Doe")
		const event = new CustomerCreatedEvent(customer);
		const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
		const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

		eventDispatcher.register("customer.created", eventHandler1);
		eventDispatcher.register("customer.created", eventHandler2);
		eventDispatcher.dispatch(event);

		expect(spyEventHandler1).toHaveBeenCalledWith(event);
		expect(spyEventHandler1).toHaveBeenCalledTimes(1)
		expect(spyEventHandler2).toHaveBeenCalledWith(event);
		expect(spyEventHandler2).toHaveBeenCalledTimes(1)
	});

	it("should dispatch customer_address.changed event", () => {
		const eventHandler = new PrintLogWhenCustomerAddressChangesHandler();
		const customer = new Customer("c1", "John Doe")
		const address = new Address("St John", 123, "New York", "00501")
		customer.changeAddress(address)
		const event = new CustomerAddressChangedEvent(customer);
		const spyEventHandler = jest.spyOn(eventHandler, "handle");

		eventDispatcher.register("customer_address.changed", eventHandler);
		eventDispatcher.dispatch(event);

		expect(spyEventHandler).toHaveBeenCalledWith(event);
		expect(spyEventHandler).toHaveBeenCalledTimes(1)
	});
});
