import { Controller, Get, Route } from 'tsoa';

@Route('/product')
export class ProductController extends Controller {
    @Get('')
    public async index() {
        return { msg: 'Hello World!' };
    }

    @Get('/msg')
    public msg() {
        return { msg: 'This is a message' };
    }
}
