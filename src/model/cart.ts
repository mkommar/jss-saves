import { qualifiedTypeIdentifier, stringTypeAnnotation } from "@babel/types";
import { strict } from "assert";
import { Discount } from "./discount";
import { SKU } from "./sku";

export class Cart {
    public baseCartMap: Map<string, SKU>;
    public discountCartMap: Map<string, SKU>;
    public discountModel: Discount;

    constructor(baseCartArray: SKU[], discountCartArray: SKU[], discountModel: Discount) {
        this.baseCartMap = new Map<string, SKU>();
        this.discountCartMap = new Map<string, SKU>();

        baseCartArray.forEach((itemSet) => {
            this.baseCartMap.set(itemSet.sku, itemSet);
        });

        discountCartArray.forEach((itemSet) => {
            this.discountCartMap.set(itemSet.sku, itemSet);
        });

        this.discountModel = discountModel;
    }

    public setDiscountModel(discountModel: Discount) {
        this.discountModel = discountModel;
    }

    public runDiscountModel() {
        this.discountCartMap = this.discountModel.applyDiscount(this.baseCartMap);
    }

    public removeFromInventory(skuString: string, qty: number) {
        this.baseCartMap.get(skuString).qty -= qty;
    }

    public addToInventory(skuString: string, qty: number) {
        this.baseCartMap.get(skuString).qty += qty;
    }
}
