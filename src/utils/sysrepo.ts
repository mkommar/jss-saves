import { NaiveDiscount } from "../module/naive/model/discount";
import { SKU } from "../model/sku";
import { Cart } from "../model/cart";
import  items from '../data/skus.json';

export class SysRepo {
    private static instance: SysRepo;
    private carts: Map<string, Cart>;
    private inventory: Cart;
    private discounts: Map<string, NaiveDiscount>;    

    private constructor() {
        if(SysRepo.instance) {
            return SysRepo.instance;
        }

        let baseCart: Array<SKU>;

        items.forEach((item: { sku: string; name: string; price: number; qty: number; }) => baseCart.push(new SKU(item.sku, item.name, item.price, item.qty)));

        this.inventory = new Cart(baseCart, null, null);


        SysRepo.instance = this;
        return SysRepo.instance;
    }

    static getInstance(): SysRepo {
        if(!SysRepo.instance) {
            SysRepo.instance = new SysRepo();
        }
        return SysRepo.instance;
    }

    public getInventoryProducts(): Map<string, SKU> {
        return this.inventory.baseCartMap;
    }
}
