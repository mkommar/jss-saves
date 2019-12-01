export class SKU {
    sku: string;
    name: string;
    price: number;
    qty: number;

    constructor(sku: string, name: string, price: number, qty: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}