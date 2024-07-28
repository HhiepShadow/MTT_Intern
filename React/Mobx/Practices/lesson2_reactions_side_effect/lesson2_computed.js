import { makeObservable, observable } from "mobx";

class OrderLine {
    price = 0;
    amount = 1;

    constructor(price) {
        makeObservable(this, {
            price: observable,
            amount: observable,
            total: computed
        });
        this.price = price;
    }

    get total() {
        return this.price * this.amount;
    }
}