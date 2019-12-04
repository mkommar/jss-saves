import { Controller, Get, Route, Post, Request, Body, Path} from 'tsoa';
import { SysRepo } from '../utils/sysrepo';
import * as express from 'express';
import { strMapToObj } from '../utils/common';
import { idText } from 'typescript';

@Route('/cart')
export class CartController extends Controller {
    @Get('')
    public async getIndex(@Request() req: express.Request) {
        let sr = new SysRepo();
        let baseCart = strMapToObj(sr.getCart(req.session.cartid).baseCartMap);
        sr.getCart(req.session.cartid).runDiscountModel();
        let discountCart = strMapToObj(sr.getCart(req.session.cartid).discountCartMap);

        return { cart: baseCart, discount: discountCart };
    }

    @Post('')
    public async postIndex(@Request() req: express.Request) {
        let randSession = Math.floor(Math.random() * 1000);
        let sr = new SysRepo();
        
        req.session.cartid = randSession.toString();
        sr.setNewCart(req.session.cartid);

        return { cid: req.session.cartid };
    }

    @Post('{id}/{qty}')
    public async postIdIndex(@Request() req: express.Request, @Path() id: string, @Path() qty: number) {
        let sr = new SysRepo();
        let baseCart = sr.getCart(req.session.cartid);
        console.log("id is ", id, " and qty is ", qty);
        baseCart.addToInventoryFromOtherSource(sr.inventory, id, qty);
        baseCart.runDiscountModel();
        let discountCart = strMapToObj(sr.getCart(req.session.cartid).discountCartMap);

        return { cart: strMapToObj(baseCart.baseCartMap), discount: discountCart };
    }
}
