class Cart {
    baseCart: Array<SKU>;
    discountCart: Array<SKU>;
    discountModel: Discount;

    constructor(baseCart: Array<SKU>, discountCart: Array<SKU>, discountModel: Discount) {
        this.baseCart = baseCart;
        this.discountCart = discountCart;
        discountModel = discountModel;
    }

    setDiscountModel(discountModel: Discount) {
        this.discountModel = discountModel;
    }

    runDiscountModel() {
        this.discountCart = this.discountModel.checkDiscount();
    }
}