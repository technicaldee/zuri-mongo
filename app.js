const express = require('express')
const mongoose = require('mongoose')

const app = express()

//mongodb connection
mongoose.connect("mongodb://localhost/zuri_mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var unless = function(path, middleware) {
    return function(req, res, next) {
        if (path === req.path) {
            return next();
        } else {
            return middleware(req, res, next);
        }
    };
};

//middleware
app.use(express.urlencoded({extended: false}))
app.use(unless('/', express.json()))


// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


app.listen(3000, () => console.log("Server stated on port 3000"))