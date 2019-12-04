import express from "express";
import cookieSession from "cookie-session";

import { RegisterRoutes } from './routes/routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieSession({
    name: 'session',
    keys: ["abcd1234"],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }));

RegisterRoutes(app);

app.listen(port, () => 
{
    // tslint:disable-next-line:no-console
    console.log(`Server started listening to port ${port}`)
});
