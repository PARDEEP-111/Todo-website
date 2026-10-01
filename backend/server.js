import express from "express" 
import cors from "cors"
import mongoose from "mongoose";


const app = express();
const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/data").then(()=>
  {
    console.log("mongodb connected");
    
  }).catch((error)=>{
   console.log(error);
   
    
  })
app.use(cors())
app.get('/api/data',(req,res)=>{
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  