import { qualifiedTypeIdentifier, stringTypeAnnotation } from "@babel/types";
import { strict } from "assert";
import { IDiscount } from "./discount";
import { SKU } from "./sku";
import { DummyDiscount } from "../module/dummy/model/discount";

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
        } else {
            this.discountCartMap = new Map<string, SKU>();
        }

        if(discountModel) 
            this.discountModel = discountModel;
        else
            this.discountModel = new DummyDiscount();
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

    public addToInventoryFromOtherSource(source: Cart, skuString: string, qty: number) {
        let cartSku = source.baseCartMap.get(skuString);
        if(this.baseCartMap.get(skuString) === undefined) {
            this.baseCartMap.set(skuString, new SKU(cartSku.sku, cartSku.name, cartSku.price, 0));
        }
        this.addToInventory(skuString, qty);
        source.removeFromInventory(skuString, qty);
    }
}
