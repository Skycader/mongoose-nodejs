const mongoose = require('mongoose')

const userxSchema = new mongoose.Schema({
  name: String,
  age: Number
})

module.exports = mongoose.model("user",userxSchema) //collection name, schema reference