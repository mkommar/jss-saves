import { Discount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class NaiveDiscount implements Discount {
    applyDiscount(baseCart: Array<SKU>) {
        let newDiscountCart = new Array<SKU>();
        let macBookProAndRPiCriteria = baseCart.filter(sku => sku.sku);
        let googleHomeCriteria = baseCart.filter(sku => sku.sku);
        let alexaCriteria = baseCart.filter(sku => sku.sku);
        
        return newDiscountCart;
    }
}