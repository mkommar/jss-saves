import { SKU } from "./sku";

export interface Discount {
    applyDiscount(baseCart: Map<string, SKU>): Map<string, SKU>;
}