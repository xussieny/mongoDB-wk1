const {connectDB, mongoose}= require('./db');
const {User}= require('./models/User');
const {Task} = require('./models/Task');

async function main() {
  await connectDB();
//   await User.insertOne({
//     name:"alex",
//     email: "alex@gmail.c0om",
//     role:"user",
//   })
//   await User.insertMany([{
//     name:"fuad",
//     email:"fuad@gmail.com",
//     role: "user",
//   },
// {
//     name:"alex",
//     email:"alex@gmail.com",
//     role:"user",
// }]);
// await User.deleteOne({email: "nati@example.com"});


// await User.insertMany([{
//     name:"john",
//     email:"john@example.com",
//     role:"user",
// },{
//     name:"namd",
//     email:"namd@gmail.com",
//     role:"user",
// }])

// await User.deleteOne({emai:"john@example.com"})
// console.log("bye john");
    // console.log("Bye nati")
// await User.deleteOne({email:"nati@example.com"})
// console.log("data populated");





    await Task.insertMany([
        { title: "Write Proposal", status: "todo", owner: "Alice" },
        { title: "Design Schema", status: "in_progress", owner: "Dedan" }
    ]);
await mongoose.disconnect();
};
main();