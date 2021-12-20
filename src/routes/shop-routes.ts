import express from "express";
import Shop from "../models/Shop";
const shopRoutes = express.Router();

const shops: Shop[] = [
    { id: 111, name: "Pepper's Pizza", rating: 4.5 },
    { id: 222, name: "Clive's Chives", rating: 3.4 },
    { id: 333, name: "Bretty's Brews", rating: 4.3 },
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];


shopRoutes.get("/", function(req, res){
    res.json(shops);
});

shopRoutes.get("/:id", function(req, res){
    //search shop array
    //find shop by id property
    //return the json response with the shop object
});

export default shopRoutes;