import { IDiscount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class DummyDiscount implements IDiscount {
    public applyDiscount(baseCart: Map<string, SKU>) {
        return baseCart;
    }

}
