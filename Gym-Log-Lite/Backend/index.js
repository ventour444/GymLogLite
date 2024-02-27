import express from 'express';
import dotenv from 'dotenv';
import main from './src/db/main.js';
import cors from 'cors';
import bodyParser from 'body-parser'; 

import { router as userRouter } from './src/routes/user.route.js';

const app = express();

dotenv.config({ path: `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : '' }` });

const PORT = 4000;
const HOST = '127.0.0.1';

app.use(bodyParser.json());
app.use(cors());

app.use('/', userRouter); 

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is listening at http://${SERVERHOST}:${SERVERPORT}`);
});

main();

export default server;
