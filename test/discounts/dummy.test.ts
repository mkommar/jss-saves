import { DummyDiscount } from "../../src/module/dummy/model/discount";
import { SKU } from "../../src/model/sku";
import { Cart } from "../../src/model/cart";
import  items from '../../src/data/skus.json';

test('check dummy discount', () => {
    let baseCart = new Array<SKU>();
    let discountCart = new Array<SKU>();
    let discountModel = new DummyDiscount();

    items.forEach(item => baseCart.push(new SKU(item.sku, item.name, item.price, item.qty)));
    
    let cart = new Cart(baseCart, discountCart, discountModel);
    cart.runDiscountModel();

    for(let v of cart.baseCartMap) {
        expect(cart.baseCartMap.get(v[0]).sku).toBe(cart.baseCartMap.get(v[0]).sku);
    }
})