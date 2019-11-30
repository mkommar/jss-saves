import { SKU } from "./sku";

export interface Discount {
    applyDiscount(baseCart: Array<SKU>): Array<SKU>;
}