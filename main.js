import express from "express";

const app = express();
const PORT = 8080;

app.get("/",(req,res)=>{
    res.json({msg:"Hello Ram :)"})
})
app.listen(PORT,()=>{
    console.log(`Server listens on http://Localhost:${PORT}`);
})