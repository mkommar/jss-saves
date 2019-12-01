import { Discount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class DummyDiscount implements Discount {
    applyDiscount(baseCart: Array<SKU>) {
        return baseCart;
    }

}