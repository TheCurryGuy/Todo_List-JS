const controller = require('../controllers/todo.controllers')

module.exports = (app) => {
    app.get("/TodoApp/api/v1/todo", controller.getAllTodos)
    
    // GET 127.0.0.1:8000/TodoApp/api/v1/todo/5
    app.get("/TodoApp/api/v1/todo/:id", controller.getTodoById)
   
    //POST 127.0.0.1:8000/TodoApp/api/v1/todo

    app.post("/TodoApp/api/v1/todo", controller.createTodo)
    
    //PUT 127.0.0.1:8000/TodoApp/api/v1/todo/3
    app.put("/TodoApp/api/v1/todo/:id" , controller.updateTodo)

    //DELETE 127.0.0.1:8000/TodoApp/api/v1/todo/3
    app.delete("/TodoApp/api/v1/todo/:id" , controller.deleteTodo)
}