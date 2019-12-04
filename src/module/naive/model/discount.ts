import { IDiscount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class NaiveDiscount implements IDiscount {
    public applyDiscount(baseCart: Map<string, SKU>) {
        const newDiscountCart = new Map<string, SKU>();
        if(baseCart.get("43N23P") !== undefined) {
            newDiscountCart.set("43N23P", new SKU("43N23P", baseCart.get("43N23P").name, baseCart.get("43N23P").price, baseCart.get("43N23P").qty));
            if(baseCart.get("234234") !== undefined) {
                newDiscountCart.set("234234d", new SKU("234234", "Raspberry Pi B", 30.00, baseCart.get("43N23P").qty));
            }
            else {
                newDiscountCart.set("234234d", new SKU("234234", "Raspberry Pi B", 30.00, baseCart.get("43N23P").qty + baseCart.get("234234").qty));    
            }
        }


        // Google Home Criteria
        if(baseCart.get("120P90") !== undefined) {
            newDiscountCart.set("120P90", new SKU("120P90", baseCart.get("120P90").name, baseCart.get("120P90").price, baseCart.get("120P90").qty - Math.floor(baseCart.get("120P90").qty / 3)));
            newDiscountCart.set("120P90d", new SKU("120P90", baseCart.get("120P90").name, 0, Math.floor(baseCart.get("120P90").qty / 3)));
        }
        
        // Alexa Criteria
        if(baseCart.get("A304SD") !== undefined) {

            if (baseCart.get("A304SD").qty > 3) {
                newDiscountCart.set("A304SDd", new SKU("A304SD", baseCart.get("A304SD").name, baseCart.get("A304SD").price * .9, baseCart.get("A304SD").qty));
            }
            else {
                newDiscountCart.set("A304SD", new SKU("A304SD", baseCart.get("A304SD").name, baseCart.get("A304SD").price, baseCart.get("A304SD").qty));
            }
        }
        return newDiscountCart;
    }
}
