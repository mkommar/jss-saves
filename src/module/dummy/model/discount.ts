class DummyDiscount implements Discount {
    checkDiscount() {
        let arrayOfSkus = new Array<SKU>();

        arrayOfSkus.push(new SKU("foo", "bar", 0.00, 1337));
        return arrayOfSkus;
    }
}