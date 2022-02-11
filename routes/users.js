const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    req.query.name
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = true
   if(isValid) {
       users.push({ firstName: req.body.firstName})
       res.redirect(`/users/${users.length - 1}`)
   } else {
       console.log("Error")
       res.render('users/new', { firstName: req.body.firstName})
   }
})

// :id is a dynamic parameter 
router.get('/:id', (req, res) => {
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{name: "Kelli"}, {name: "Izzie"}]
// will run any time it finds a param that matches the name that is passed in
router.param("id", (req, res, next, id) => {
   req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router