import { qualifiedTypeIdentifier, stringTypeAnnotation } from "@babel/types";
import { strict } from "assert";
import { IDiscount } from "./discount";
import { SKU } from "./sku";

export class Cart {
    public baseCartMap: Map<string, SKU>;
    public discountCartMap: Map<string, SKU>;
    public discountModel: IDiscount;

    constructor(baseCartArray: SKU[], discountCartArray: SKU[], discountModel: IDiscount) {
        this.baseCartMap = new Map<string, SKU>();
        this.discountCartMap = new Map<string, SKU>();

        baseCartArray.forEach((itemSet) => {
            this.baseCartMap.set(itemSet.sku, itemSet);
        });

        if(discountCartArray) {
            discountCartArray.forEach((itemSet) => {
                this.discountCartMap.set(itemSet.sku, itemSet);
            });
        }

        if(discountModel) 
            this.discountModel = discountModel;
    }

    public setDiscountModel(discountModel: IDiscount) {
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
