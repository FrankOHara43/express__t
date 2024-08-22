const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send("user list")
})

router.get('/new', (req,res) => {
    // res.render('users/new')
    res.render('users/new', {firstName: "Test"})
})

router.post('/', (req,res) => {
    //console.log(req.body.firstName)
   // res.send("hi")
   // res.send('Created User')

   const isValid = true
   if(isValid) {
    users.push({ firstName: req.body.firstName})
    res.redirect(`/users/${users.length-1}`)
   }else{
    console.log("Error")
    res.render('users/new', {firstName: req.body.firstName})
   }
   res.send("Hi")
})
router
    .route('/:id')
    .get((req,res) => {
        console.log(req.user)
        res.send(`Get user with id ${req.params.id}`)
    }).put((req,res) => {
        res.send(`Put user with id ${req.params.id}`)
    }).delete((req,res) => {
        res.send(`Delete user with id ${req.params.id}`)
    })
    
// culumnation of the get put and delete in router
/* router.get('/:id', (req,res) => {
    res.send(`Get user with id ${req.params.id}`)
})

router.put('/:id', (req,res) => {
    res.send(`Put user with id ${req.params.id}`)
})

router.delete('/:id', (req,res) => {
    res.send(`Delete user with id ${req.params.id}`)
})
*/
// express reads code line by line.

const users = [{name: "kyle"}, {name: "sally"}]
router.param('id', (req,res,next,id) => {
    req.user = users[id]
    next()
})

module.exports = router