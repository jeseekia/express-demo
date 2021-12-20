import express from "express";
const searchRoutes = express.Router();

searchRoutes.get("/search", function(req,res){
    res.json(`Keyword: ${req.query.keyword} || Page: ${req.query.page}`);
});

export default searchRoutes;