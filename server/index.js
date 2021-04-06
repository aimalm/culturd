

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './routes/routes.js';


const app = express();

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));


//const a = bodyParser
//app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const key = "Em3Wi5va8is15";

app.use(`/culturd_api/${key}`, Routes);


const CONNECTION_URL = "mongodb+srv://cuturd:culturd123@cluster0.adry7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);