const express = require('express')
const app = express()

//app.use(express.static("name of folder")) --> used to render all the static files inside the folder passed.
app.use(express.urlencoded({ extended: true}))// --> allows to access info coming from forms
//app.use(express.json()) --> used to make a json request
app.set("view engine", "ejs")
app.use(logger)

app.get("/", (req,res) => {
    console.log("working!!")
    // res.send("Hello") very generic way to send data
    // res.sendStatus(200) sends just the status code
    //res.status(200).send("This is working!!!") --> status as well as a message
    // res.status(200).json({message : "ok"}) --> used to send a json message
    // res.download('pass in the url') --> used to get the files to be downloaded
      res.render("index", { text: 'world'}) // --> used to render html
})


const userRouter = require('./routes/users')

app.use('/users',userRouter)

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)