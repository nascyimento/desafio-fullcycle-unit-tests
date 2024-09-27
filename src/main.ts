import Customer from "./domain/entity/customer";
import Address from "./domain/entity/address";
import OrderItem from "./domain/entity/order_item";
import Order from "./domain/entity/order";

let customer = new Customer('123', 'John Doe');
const address = new Address('Main St.', 123, 'Springfield', '12345');
customer.address = address;
customer.activate();

const item1 = new OrderItem('123', '123', 'item 1', 100, 2);
const item2 = new OrderItem('456', '456', 'item 2', 200, 1);
const item3 = new OrderItem('789', '789', 'item 3', 300, 1);

let order = new Order('1', '123', [item1, item2, item3]);
