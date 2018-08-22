/*global $*/
$(document).ready(() => {
    $.getJSON("/api/todos")
        .then(data => addTodos(data));

    $("#todoInput").keypress(e => {
        if (e.which === 13) {
            createTodo();
        }
    });
    $(".list").on('click', 'li', function() {
        updateTodo($(this));
    });
    $('.list').on('click', 'span', function(e) {
        e.stopPropagation();
        removeTodo($(this).parent());

    });
});



const addTodo = (todo) => {
    let newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
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

const removeTodo = (todo) => {
    var clickedId = todo.data('id');
    //alert(clickedId);
    var deleteUrl = '/api/todos/' + clickedId;

    $.ajax({
            method: 'DELETE',
            url: deleteUrl
        })
        .then(() => todo.remove())
        .catch(err => console.log(err));
};

const updateTodo = (todo) => {
    //console.log(todo.data('completed'));

    var isDone = !todo.data("completed");
    var updateData = { completed: isDone };
    var updateUrl = '/api/todos/' + todo.data('id');
    $.ajax({
            method: 'PUT',
            url: updateUrl,
            data: updateData
        })
        .then(updatedTodo => {
            todo.toggleClass("done");
            todo.data("completed", isDone);
            console.log(updatedTodo);
        })
        .catch(err => console.log(err));
};
