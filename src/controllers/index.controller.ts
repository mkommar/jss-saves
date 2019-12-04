import { Controller, Get, Route } from 'tsoa';

@Route('')
export class IndexController extends Controller {
    @Get('')
    public async index() {
        return {out: 'not yet implemented'};
    }
}
