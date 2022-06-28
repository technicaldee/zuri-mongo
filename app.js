const express = require('express')
const mongoose = require('mongoose')

const app = express()

//mongodb connection
mongoose.connect("mongodb://localhost/zuri_mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//middleware
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.set("view engine", "ejs")


// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3000, () => console.log("Server stated on port 3000"))