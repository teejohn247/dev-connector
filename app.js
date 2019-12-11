import express from 'express';
import Debug from 'debug';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDb from './config/db';
import userRouter from './routes/user';

const app = express();
dotenv.config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const port = process.env.PORT || 5000;
const debug = Debug('http');

connectDb();


app.get('/api/v1', (req, res) => {
    res.json({
      message: 'Welcome to Auto-Mart API'
    });
  });

app.use('/api/v1', userRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app;