import express from "express";
const routes = express.Router();

routes.get("/", function(req, res){
    res.json("Home");
});

routes.get("/node", function(req, res){
    res.json("Node");
});

export default routes;