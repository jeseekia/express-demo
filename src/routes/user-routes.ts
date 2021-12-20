import express from "express";
const userRoutes = express.Router();

userRoutes.post("/", function(req, res){
    console.log(req.body);
});

userRoutes.get("/", function(req, res){
    res.json(req.body);
});

//get a user by id
userRoutes.get("/:id", function(req, res){
    res.json(`User ID: ${req.params.id}`);
});

export default userRoutes;