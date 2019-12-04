import { Controller, Get, Route } from 'tsoa';

@Route('/discount')
export class DiscountController extends Controller {
    @Get('')
    public async index() {
        return { msg: 'Hello World!' };
    }

    @Get('/msg')
    public msg() {
        return { msg: 'This is a message' };
    }
}
