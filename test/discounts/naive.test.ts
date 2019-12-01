import { NaiveDiscount } from "../../src/module/naive/model/discount";
import { SKU } from "../../src/model/sku";
import { Cart } from "../../src/model/cart";
import  items from '../../src/data/skus.json';

let baseCart = new Array<SKU>();
let discountCart = new Array<SKU>();
let discountModel = new NaiveDiscount();

items.forEach(item => baseCart.push(new SKU(item.sku, item.name, item.price, item.qty)));


test('check naive discount', () => {    
    let cart = new Cart(baseCart, discountCart, discountModel);
    cart.runDiscountModel();

    //
    //         "sku": "120P90",
    //         "name": "Google Home"
    //
    //         "sku": "43N23P",
    //         "name": "MacBook Pro",
    //
    //         "sku": "A304SD",
    //         "name": "Alexa Speaker",
    //
    //         "sku": "234234",
    //         "name": "Raspberry Pi B"

    // Count macs and rpis. Should be same
    expect(cart.baseCartMap.get("43N23P").qty).toBeLessThanOrEqual(cart.discountCartMap.get("234234d").qty);

    // Count Google Homes. The total count should be appropriate
    expect(cart.baseCartMap.get("120P90").qty).toBeGreaterThanOrEqual(cart.discountCartMap.get("120P90d").qty)
    
    // Total Alexas, should be 90% of total
    expect(cart.baseCartMap.get("A304SD").qty * cart.baseCartMap.get("A304SD").price * .9)
        .toBeLessThanOrEqual(cart.discountCartMap.get("A304SDd").qty * cart.discountCartMap.get("A304SDd").price)
})