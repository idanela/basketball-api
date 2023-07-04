import express from 'express';
import mongoose from "mongoose";
import baseRoter from './routers';

const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/basketball").then(()=>console.log("connected")).catch(console.error);
app.use('/',baseRoter);

app.listen(5000,()=>
{
    console.log("Listening on port 5000")
})



