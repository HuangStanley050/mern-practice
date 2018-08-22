var express = require('express');
var router = express.Router();
const db = require("../models");
const helpers = require("../helpers/todos");


router.route("/")
    .get(helpers.getTodos)
    .post(helpers.createTodo);

router.route("/:todoID")
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);



module.exports = router;
