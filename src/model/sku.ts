export class SKU {
    public sku: string;
    public name: string;
    public price: number;
    public qty: number;

    constructor(sku: string, name: string, price: number, qty: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
}
