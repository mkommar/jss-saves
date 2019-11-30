import { NaiveDiscount } from "../../src/module/naive/model/discount";
import { SKU } from "../../src/model/sku";
import { Cart } from "../../src/model/cart";
import  items from '../../src/data/skus.json';

test('check naive discount', () => {
    let baseSkus = new Array<SKU>();
    let discountCart = new Array<SKU>();
    let discountModel = new NaiveDiscount();

    items.forEach(item => baseSkus.push(new SKU(item.sku, item.name, item.price, item.qty)));
    
    let cart = new Cart(baseSkus, discountCart, discountModel);
    cart.runDiscountModel();
})