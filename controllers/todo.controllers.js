//add tasks with descriptions and deadlines, mark tasks as completed, 
//and edit and delete tasks.

const todo = require("../models/todo_model")
let id = 3
/**
 * Create the controller for fetching all the todos
 * 
 * GET 127.0.0.1:8000/ideaApp/api/v1/todo
 * 
 * Should Return list of all the todo list items
 */
exports.getAllTodos = (req, res) => {
    res.status(200).send(todo)
}

exports.getTodoById = (req, res) => {
    todo_id = req.params.id
    if(todo[todo_id]){
        res.status(200).send(todo[todo_id])
    }
    else{
        res.status(404).send({message: "ToDo item not found"})
    }
}

exports.createTodo = (req, res) => {
    todo_object = req.body
    todo_object["id"] = ++id
    todo[id] = todo_object
    res.status(201).send(todo_object)
}

exports.updateTodo = (res,req) => {
    todo_id = req.params.id
    if(todo[todo_id]){
        todo_obj = req.body
        todo[todo_id] = todo_obj
        res.status(200).send(todo_obj)
    } else{
        return res.status(404).send({message: "ToDo item not found"})
    }
}
exports.deleteTodo = (req, res)=>{

    //Fetch the idea and see if it's present
    todo_id = req.params.id

    if(todo[todo_id]){
        delete todo[todo_id]
        res.status(200).send({
            message : "Yay, you todo task has been successfully deleted"
        })
    }else{
       return res.status(404).send({
        message : "The Todo id you wanted to delete is already not present boss !"
       })
    }

   
}