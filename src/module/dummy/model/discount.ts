import { Discount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class DummyDiscount implements Discount {
    applyDiscount() {
        let arrayOfSkus = new Array<SKU>();

        arrayOfSkus.push(new SKU("foo", "bar", 0.00, 1337));
        return arrayOfSkus;
    }

}