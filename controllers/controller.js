const db = require('../models/models')

const router = require('express').Router()

// Delete One
router.delete('/:id', (req, res) => {
  db.findByID(req.params.id)
    .then((books) => {
      res.json(books)
    })
    .catch(err => console.log(err))
})

//Update One
router.put('/:id', (req, res) => {
  db.findByIDAndUpdate(req.params.id)
    .then((books) => {
      res.json(books)
    })
    .catch(err => console.log(err))
})

// Show one
router.get('/:id', (req, res) => {
  db.findByID(req.params.id)
    .then((books) => {
      res.json(books)
    })
    .catch(err => console.log(err))
})

// All books
router.get('/', (req, res) => {
  db.find()
    .then((books) => {
      res.json(books)
    })
    .catch(err => console.log(err))
})

// New Book
router.post('/', (req, res) => {
  db.insertOne()
    .then((books) => {
      res.json(books)
    })
    .catch(err => console.log(err))
})



module.exports = router

