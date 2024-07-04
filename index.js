/*Problem Statement: Develop a backend for a to-do list application where you can manage your tasks
efficiently, add tasks with descriptions and deadlines, mark tasks as completed, 
and edit and delete tasks.
*/
const express = require("express")
const app = express()

app.use(express.json())
const stich = require("./routes/todo_route")
stich(app)//Stitching the route here

app.listen(8000, () => {
    console.log("Server is listening on port 8000")
})