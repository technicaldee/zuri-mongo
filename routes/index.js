const router = require("express").Router()
const { home } = require("../controllers/todocontroller");
const Todo = require('../models/Todo')

router.get("/", home)

module.exports = router;