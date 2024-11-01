import express from "express";
import movieRoute from "./route/movies.route.js"

const app = express();
const PORT=8080;

app.get("/",(req,res)=>{
    res.send("Helo Ram!!    ")
})

app.use("/movies",movieRoute);
app.listen(PORT,()=>{
    console.log(`Server Started at http://Localhost:${PORT}`);
});