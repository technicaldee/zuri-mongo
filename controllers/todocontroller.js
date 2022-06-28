
const Todo = require('../models/Todo')

async function  home (req, res) {
    const allTodo = await Todo.find()
    res.render("index", {todo: allTodo})
}

function addTodo (req, res) {
    const { title, description } = req.body;
    const newTodo = new Todo({title, description})

    // Save
    newTodo.save()
    .then(() => {
        console.log("Saved")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
}

function deleteTodo (req, res) {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=> console.log(err))
}

function updateTodo(req, res) {
    const {id, title, description} = req.body;
    Todo.findByIdAndUpdate(id, {title: title, description: description})
    .then(() =>  {
            console.log("Updated")
            res.redirect('/')
    })
    .catch((err)=> console.log(err))   
}


exports.home = home
exports.addTodo = addTodo
exports.deleteTodo = deleteTodo
exports.updateTodo = updateTodo