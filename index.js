import express from 'express';
const app = express();
import router from './routes/index.router.js';
import bodyParser from 'body-parser';
import env from 'dotenv';
env.config();
const port = process.env.PORT || '3000';
import db from './config/db.js';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);


app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is listening on http://localhost:${port}/v1`);
    }
})