const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("User List")
})

router.get('/new', (req, res) => {
    res.send("New User Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
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



module.exports = router