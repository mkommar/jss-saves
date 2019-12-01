import { SKU } from "./sku";

export interface IDiscount {
    applyDiscount(baseCart: Map<string, SKU>): Map<string, SKU>;
}
