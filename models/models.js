const mongoose = require('mongoose')

let book_schema = new mongoose.Schema(
  
  { 
  
    "title": String,
    "description": String,
    "year": Number,
    "quantity": Number,
    "imageURL": String
  })

module.exports = mongoose.model('book', book_schema);
