const events= require('events');
class Orders extends events.EventEmitter {
    constructor() {
        super();
        this.orders=0;
        this.maxOrders=50;
    }
    addOrder(amount) {
        this.orders +=amount;
        this.emit('ordersChanged');
    }
    deleteOrder(amount) {
        this.orders -= amount;
        this.emit('ordersChanged');
    }
    clearOrders() {
        this.orders=0;
        this.emit('ordersChanged');
    }
}

module.exports = Orders;