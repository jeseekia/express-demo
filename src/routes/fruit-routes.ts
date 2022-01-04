import express from "express";
const fruitRoutes = express.Router();

fruitRoutes.get("/", function(req,res){
    const daily = "Cherry";
    res.render("fruit", {daily});
});

export default fruitRoutes;