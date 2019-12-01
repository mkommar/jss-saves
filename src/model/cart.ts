import { SKU } from "./sku";
import { Discount } from "./discount";
import { strict } from "assert";
import { stringTypeAnnotation, qualifiedTypeIdentifier } from "@babel/types";

export class Cart {
    baseCartMap: Map<string, SKU>;
    discountCartMap: Map<string, SKU>;
    discountModel: Discount;

    constructor(baseCartArray: Array<SKU>, discountCartArray: Array<SKU>, discountModel: Discount) {
        this.baseCartMap = new Map<string, SKU>();
        this.discountCartMap = new Map<string, SKU>();

        baseCartArray.forEach(itemSet => {
            this.baseCartMap.set(itemSet.sku, itemSet);
        });

        discountCartArray.forEach(itemSet => {
            this.discountCartMap.set(itemSet.sku, itemSet);
        });

        this.discountModel = discountModel;
    }

    
    setDiscountModel(discountModel: Discount) {
        this.discountModel = discountModel;
    }

    runDiscountModel() {
        this.discountCartMap = this.discountModel.applyDiscount(this.baseCartMap);
    }

    removeFromInventory(skuString: string, qty: number) {
        this.baseCartMap.get(skuString).qty -= qty;
    }

    addToInventory(skuString: string, qty: number) {
        this.baseCartMap.get(skuString).qty += qty;
    }
}