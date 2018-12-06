const   eventsConfig = require('./config'),
        Orders = require('./Order/Orders.js'),
        express = require('express'),
        app = express();
        
const port =3000;
const myOrders = [];

function displayOrders() {
    console.log(`Table orders are: ${this.orders}`);
    myOrders.push(`Table orders are: ${this.orders}`);
}
function checkOverOrders() {
    if(this.orders>this.maxOrders) {
        console.log(`Too much orders! ${this.orders}`);
        myOrders.push(`Too much orders! ${this.orders}`);
    }
}

const order = new Orders();

order.on("ordersChanged", displayOrders);
order.on("ordersChanged", checkOverOrders);

order.addOrder(2);
order.addOrder(1);
order.addOrder(50);
order.deleteOrder(2);
order.deleteOrder(17);
order.clearOrders();
order.addOrder(7);

app.get('*',(req,res) => {
    res.send(myOrders);
    });
app.listen(port);
console.log(`listening on port ${port}`);