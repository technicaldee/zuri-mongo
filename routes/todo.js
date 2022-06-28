const router = require('express').Router()
const Todo = require('../models/Todo')

router.post("/add/todo", (req, res) => {
    const { title, description } = req.body;
    const newTodo = new Todo({title, description})

    // Save
    newTodo.save()
    .then(() => {
        console.log("Saved")
        res.redirect("/")
    })
    .catch((err) => console.log(err))
})

.get("/delete/todo/:_id", (req, res) => {
    const {_id} = req.params;
    Todo.deleteOne({_id})
    .then(() => {
        console.log("deleted")
        res.redirect('/')
    })
    .catch((err)=> console.log(err))
})

.post("/update/todo", (req, res) => {
    const {id, title, description} = req.body;
    Todo.findByIdAndUpdate(id, {title: title, description: description})
    .then(() =>  {
            console.log("Updated")
            res.redirect('/')
    })
    .catch((err)=> console.log(err))   
});

module.exports = router;