import { makeObservable, observable, computed, reaction, action }  from "mobx";

class ShoppingCart {
    items = [];

    constructor() {
        makeObservable(this, {
            items: observable,
            total: computed, 
            addItem: action,
            removeItem: action
        });
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }
    
    addItem(item) {
        this.items.push(item);
    }

    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}

const cart = new ShoppingCart();

reaction(() => cart.total, (total) => {
    console.log(`Total: ${total}`);
});

cart.addItem({
    name: 'Product A',
    price: 10
});

cart.addItem({
    name: 'Product B',
    price: 20
});

cart.removeItem(cart.items[0]);
