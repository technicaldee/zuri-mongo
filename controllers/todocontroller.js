
const Todo = require('../models/Todo')

async function  home (req, res) {
    const allTodo = await Todo.find()
    res.jsonp(JSON.parse(JSON.stringify(allTodo)))
}

function addTodo (req, res) {
    const { title, description } = req.body;
    const newTodo = new Todo({title, description})

    // Save
    newTodo.save()
    .then(() => {
        console.log("Saved")
        res.json({message: "Successfully Added"})
    })
    .catch((err) => console.log(err))
}

function deleteTodo (req, res) {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("deleted")
        res.json({message: 'Successfully Deleted'})
    })
    .catch((err)=> console.log(err))
}

function updateTodo(req, res) {
    const {id, title, description} = req.body;
    Todo.findByIdAndUpdate(id, {title: title, description: description})
    .then(() =>  {
            console.log("Updated")
            res.json({message: 'Successfully Updated'})
    })
    .catch((err)=> console.log(err))   
}


exports.home = home
exports.addTodo = addTodo
exports.deleteTodo = deleteTodo
exports.updateTodo = updateTodo