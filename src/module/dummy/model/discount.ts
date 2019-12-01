import { Discount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class DummyDiscount implements Discount {
    public applyDiscount(baseCart: Map<string, SKU>) {
        return baseCart;
    }

}
