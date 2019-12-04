import { Controller, Get, Route, Post, Body} from 'tsoa';
import { SysRepo } from '../utils/sysrepo';
import { Request } from 'express';

@Route('/cart')
export class CartController extends Controller {
    @Get('')
    public async getIndex() {
        return { msg: 'Hello World!' };
    }

    /*
    @Post('')
    public async postIndex(@Body() requestBody: string, req: Request) {
        let randSession = Math.floor(Math.random() * 1000);
        let sr = new SysRepo();
        
        req.session.cartid = randSession;
        
        return { success: true };
    }
*/
}
