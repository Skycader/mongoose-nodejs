const mongoose = require('mongoose')
const User = require('./schmemas/User')

mongoose.connect('mongodb://localhost/mongooseapp', 
() => { console.log('Connected to db ')},
() => { console.log(' Failed to connect to db ')})

async function run() {
  // const user = new User({name: "Kyle", age: 26})
  // await user.save()
  const user = await User.create({name: "Daniel", age: 26})
  console.log(user)
}

run()