import express from "express";
import { moviesDel, moviesGet, moviesPost, moviesPut } from "../controller/movies.controller.js";

const router = express.Router();

router.get("/",moviesGet);

router.put("/",moviesPut);

router.post("/",moviesPost);

router.delete("/",moviesDel);

export default router;