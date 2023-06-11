import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routes/Route.js'
import bodyParser from 'body-parser';
const app=express();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);


dotenv.config({path:'./config.env'});

const PORT=4000;
const conn=process.env.DATABASE;
connection(conn);

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`);  
})