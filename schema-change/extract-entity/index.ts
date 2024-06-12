class OldOrder {
  public item: string
  public quantity: number
  public shipdate: string | null
  public customerName: string
  public customerAddress: string
  constructor(item: string, quantity: number, shipdate: string | null, customerName: string, customerAddress: string) {
    this.item = item
    this.quantity = quantity
    this.shipdate = shipdate
    this.customerName = customerName
    this.customerAddress = customerAddress
  }
}

class OldDataSet {
  public orders: OldOrder[]
  constructor(orders: OldOrder[]) {
    this.orders = orders
  }
}

class Customer {
  public name: string
  public address: string
  constructor(name: string, address: string) {
    this.name = name
    this.address = address
  }
}

class NewOrder {
  public item: string
  public quantity: number
  public shipdate: string | null
  public customer: Customer
  constructor(item: string, quantity: number, shipdate: string | null, customer: Customer) {
    this.item = item
    this.quantity = quantity
    this.shipdate = shipdate
    this.customer = customer
  }
}

class NewDataSet {
  public orders: NewOrder[]
  public customers: Customer[]
  constructor(orders: NewOrder[], customers: Customer[]) {
    this.orders = orders
    this.customers = customers
  }
}

function toNew(old: OldDataSet): NewDataSet {
  const customers: Customer[] = [];
  const orders: NewOrder[] = old.orders.map((oldOrder) => {
    const customer = new Customer(oldOrder.customerName, oldOrder.customerAddress);
    customers.push(customer);
    return new NewOrder(oldOrder.item, oldOrder.quantity, oldOrder.shipdate, customer)
  });
  return new NewDataSet(orders, customers);
}

function toOld(newDataSet: NewDataSet): OldDataSet {
  const orders: OldOrder[] = newDataSet.orders.map((newOrder) => {
    return new OldOrder(newOrder.item, newOrder.quantity, newOrder.shipdate, newOrder.customer.name, newOrder.customer.address)
  });
  return new OldDataSet(orders);
}