const mongoose = require("mongoose");
const User = require("./schmemas/User");

mongoose.connect(
  "mongodb://localhost/mongooseapp",
  () => {
    // console.log("Connected to db ");
  },
  () => {
    console.log(" Failed to connect to db ");
  }
);

async function create() {
  try {
   
  // const user = new User({name: "Kyle", age: 26})
  // await user.save()
  const user = await User.create({
    name: "Axl",
    age: 16,
    email: "AXL@GOOGLE.com",
    hobbies: ["Running","Jumping"],
    address: {
      street: "Main st."
    }
  });
  console.log(user);

  // user.createdAt = 5
  // await user.save()
} catch(e) {
  console.error(e.message)
}
}

// create()

async function find() {
  try {
   
  // const user = await User.findById("63ac8886d87c42bff9f8052e")
  // const user = await User.find({name: "Daniel"})
  // const user = await User.findOne({name: "Daniel"})
  // const user = await User.exists({name: "Daniel"})
  // const user = await User.where("name").equals("Daniel")
  // const user = await User.where("age").gt(21)
  // const user = await User.where("age").gt(21).where("name").equals("Daniel")
  // const user = await User.where("age").gt(21).lt(68).where("name").equals("Daniel")
  // const user = await User.where("age").gt(21).lt(68).where("name").equals("Daniel").limit(2)
  // const user = await User.where("age").gt(21).lt(68).where("name").equals("Daniel").limit(2).select("age")
  // const user = await User.findOne({age: {$gt: 21}})

  // const user = await User.where("name").equals("Daniel")
 
  // user[0].bestFriend = "63ac8d80c3c5e3697a8c2848" 
  // await user[0].save()
  // console.log(user);

  // const user = await User.where("name").equals("Daniel").populate("bestFriend") 
  // upper does nto work with methods
  const user = await User.findOne({name: "Daniel"})
  // const user = await User.findByName("Daniel")
  // const user = await User.find().byName("Daniel")
  console.log(user)
  // console.log(user.namedEmail)
  await user.save()
//  user.sayHi()
} catch(e) {
  console.error(e.message)
}
}

// create()
find()
