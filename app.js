import express from 'express';
import Debug from 'debug';
import logger from 'morgan';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDb from './config/db';
import userRouter from './routes/user';
import path from 'path';


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
      message: 'Welcome to Dev-Connector API'
    });
  });

app.use('/api/v1', userRouter);
// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app;