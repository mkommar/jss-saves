import express from "express";
import { NaiveDiscount } from "./module/naive/model/discount";
import { SKU } from "./model/sku";
import { Cart } from "./model/cart";
import  items from './data/skus.json';

let baseCart = new Array<SKU>();
let discountCart = new Array<SKU>();
let discountModel = new NaiveDiscount();

items.forEach((item: { sku: string; name: string; price: number; qty: number; }) => baseCart.push(new SKU(item.sku, item.name, item.price, item.qty)));

let cart = new Cart(baseCart, discountCart, discountModel);
cart.runDiscountModel();

const app = express();
const port = 3000;

function strMapToObj(strMap: Map<string, SKU> ) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        // We don’t escape the key '__proto__'
        // which can cause problems on older engines
        obj[k] = v;
    }
    return obj;
}

app.get("/", (req, res) => {
    let globalBaseCart = strMapToObj(cart.baseCartMap);
    let globalDiscountCart = strMapToObj(cart.discountCartMap);
    let out = {
        cart: globalBaseCart,
        discount: globalDiscountCart
    }
    res.json(out);
});

app.listen(port, () => 
{
    // tslint:disable-next-line:no-console
    console.log(`Server started listening to port ${port}`)
});
