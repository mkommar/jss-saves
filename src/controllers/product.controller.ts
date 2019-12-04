import { Controller, Get, Route } from 'tsoa';
import { SysRepo } from '../utils/sysrepo';
import { strMapToObj } from '../utils/common';

@Route('/product')
export class ProductController extends Controller {
    @Get('')
    public async index() {
        let sr = new SysRepo();
        let contents = strMapToObj(sr.getInventoryProducts());

        return { inventory: contents };
    }
}
