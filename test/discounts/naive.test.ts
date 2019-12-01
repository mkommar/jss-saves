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

    let baseMacBookProCriteria = cart.baseCart.filter(sku => sku.sku === "43N23P");
    let baseRPiCriteria = cart.baseCart.filter(sku => sku.sku === "234234");
    let baseGoogleHomeCriteria = cart.baseCart.filter(sku => sku.sku === "120P90");
    let baseAlexaCriteria = cart.baseCart.filter(sku => sku.sku === "A304SD");

    let discountMacBookProCriteria = cart.discountCart.filter(sku => sku.sku === "43N23P");
    let discountRPiCriteria = cart.baseCart.filter(sku => sku.sku === "234234");
    let discountGoogleHomeCriteria = cart.discountCart.filter(sku => sku.sku === "120P90");
    let discountAlexaCriteria = cart.discountCart.filter(sku => sku.sku === "A304SD");

    // Count macs and rpis. Should be same
    expect(discountMacBookProCriteria.length).toBeLessThanOrEqual(discountRPiCriteria.length);

    // Count Google Homes. The total price should be appropriate
    expect((baseGoogleHomeCriteria.length * baseGoogleHomeCriteria[0].price)).toBeLessThanOrEqual(discountGoogleHomeCriteria.length * discountGoogleHomeCriteria[0].price)
    
    // Total Alexas, should be 90% of total
    expect(baseAlexaCriteria.length * baseAlexaCriteria[0].price *.9).toBeLessThanOrEqual(discountAlexaCriteria.length * discountAlexaCriteria[0].price)
})