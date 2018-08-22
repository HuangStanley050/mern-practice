/*global $*/
$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(data => addTodos(data));

    $("#todoInput").keypress(e => {
        if (e.which === 13) {
            createTodo();
        }
    });
});



const addTodo = (todo) => {
    let newTodo = $('<li class="task">' + todo.name + '</li>');
    if (todo.completed) {
        newTodo.addClass("done");
    }
    $(".list").append(newTodo);
};


const addTodos = (todos) => {
    todos.map(todo => {
        addTodo(todo);
    });
};

const createTodo = () => {
    let userInput = $("#todoInput").val();
    $.post("/api/todos", { name: userInput })
        .then((newTodo) => {
            console.log(newTodo);
            $("#todoInput").val('');
            addTodo(newTodo);
        })
        .catch(err => console.log(err));
};
