import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("get all movies");
});

router.put("/",(req,res)=>{
    res.send("put all movies");
});

router.post("/",(req,res)=>{
    res.send("post all movies");
});

router.delete("/",(req,res)=>{
    res.send("del all movies");
});

export default router;