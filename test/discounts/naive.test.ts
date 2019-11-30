import { NaiveDiscount } from "../../src/module/naive/model/discount";
import { SKU } from "../../src/model/sku";
import { Cart } from "../../src/model/cart";
import  items from '../../src/data/skus.json';

test('check naive discount', () => {
    let baseCart = new Array<SKU>();
    let discountCart = new Array<SKU>();
    let discountModel = new NaiveDiscount();

    items.forEach(item => baseCart.push(new SKU(item.sku, item.name, item.price, item.qty)));
    
    let cart = new Cart(baseCart, discountCart, discountModel);
    cart.runDiscountModel();

    cart.discountCart.forEach(item => {
        // Count macs and rpis. Should be same

        // Count Google Homes. The total price should be appropriate

        // Total Alexas, should be 90% of total
    })

})