const router = require('express').Router()
const { addTodo, deleteTodo, updateTodo } = require('../controllers/todocontroller');

router.post("/add/todo", addTodo)

.get("/delete/todo/:_id", deleteTodo)

.post("/update/todo", updateTodo);

module.exports = router;