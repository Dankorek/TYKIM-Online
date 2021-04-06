import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to mlab database!');
  app.listen(PORT, () => console.log(`App is listening on port ${PORT}!`));
}).catch(error => {
  console.log(`connection errors: ${error}`);
});
