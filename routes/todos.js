var express = require('express');
var router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    //res.send("Hello from todos route");
    db.Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.send(err));
});

router.post("/", (req, res) => {
    db.Todo.create(req.body)
        .then(newTodo => {
            res.status(201).json(newTodo);
        })
        .catch(err => {
            res.send(err);
        });
});

module.exports = router;
