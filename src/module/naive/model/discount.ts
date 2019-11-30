import { Discount } from "../../../model/discount";
import { SKU } from "../../../model/sku";

export class NaiveDiscount implements Discount {
    applyDiscount(baseCart: Array<SKU>) {
        let newDiscountCart = new Array<SKU>();
        let macBookProAndRPiCriteria = baseCart.filter(sku => sku.sku === "43N23P");
        let googleHomeCriteria = baseCart.filter(sku => sku.sku === "120P90");
        let alexaCriteria = baseCart.filter(sku => sku.sku === "A304SD");

        macBookProAndRPiCriteria.forEach(mac => {
            newDiscountCart.push(new SKU(mac.sku, mac.name, mac.price, 1));
            newDiscountCart.push(new SKU("234234", "Raspberry Pi B", 30.00, 1));
        })

        for(let i=0; i<googleHomeCriteria.length; i++) {
            if(i%3 === 0) {
                newDiscountCart.push(new SKU(googleHomeCriteria[0].sku, googleHomeCriteria[0].name, googleHomeCriteria[0].price, 0));
            } else {
                newDiscountCart.push(new SKU(googleHomeCriteria[0].sku, googleHomeCriteria[0].name, googleHomeCriteria[0].price, 1));
            }
        }

        if(alexaCriteria.length > 3) {
            alexaCriteria.forEach(alexa => newDiscountCart.push(new SKU(alexa.sku, alexa.name, alexa.price * .9, 1)));
        }
            
        
        return newDiscountCart;
    }
}