const mongoose = require('mongoose');
const Todo = require("./todo.js");
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/todo-api");

mongoose.Promise = Promise;
export default Todo;
