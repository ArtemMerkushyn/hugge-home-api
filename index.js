import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routesProducts from './routes/products.js';

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json());

//routes http://localhost:8080/
app.use('/api', routesProducts);



async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://merkushyndev13:merkushyndev13@cluster0.dwp2fvz.mongodb.net/`
        );
        app.listen(PORT, () => {
            console.log(`server started on: http://localhost:${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}
start();