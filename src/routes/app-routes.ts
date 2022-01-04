import express from "express";
const routes = express.Router();

routes.get("/", function(req, res){
    // res.json("Home");
    // res.render('home'); //displays the template
    res.render('home', 
    {
        name:"Jeseekia", 
        state:"MI",
        languages: {
            primary: "JavaScript",
            secondary: "Python"
        },
        pets: [
            {name: "Jayna",type: "cat"}, 
            {name: "Blair", type: "dog"}
        ],
        message: ""
    }); //displays the template with data
});

routes.get("/node", function(req, res){
    res.json("Node");
});

export default routes;